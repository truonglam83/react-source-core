import axios from "axios";
import { ENV } from "@/constants/env";
import { store } from "@/store/store";
import { decodeToken } from "@/utils/auth/auth.utils";
import { clearAuth, setAuth } from "./auth.slice";
import { refreshTokenApi } from "./auth.api";
import {
  clearToken,
  getRefreshToken,
  getToken,
  saveToken,
} from "@/utils/auth/auth.storage";

const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 10000,
});

/**
 * Track refresh state
 */
let isRefreshing = false;
let failedQueue: any[] = [];

/**
 * Resolve queued requests
 */
const processQueue = (error: any, token: string | null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token);
  });
  failedQueue = [];
};

/**
 * Attach access token
 */
api.interceptors.request.use((config) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
});

/**
 * Handle response
 */
api.interceptors.response.use(
  (res) => res.data,
  async (error) => {
    const originalRequest = error.config;

    // Only handle 401
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    // Prevent infinite retry
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    /**
     * Queue requests if refresh is in progress
     */
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(api(originalRequest));
          },
          reject,
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const refreshToken = getRefreshToken();

      if (!refreshToken) throw new Error("No refresh token");

      /**
       * Call refresh API
       */
      const res = await refreshTokenApi(refreshToken);

      const newAccessToken = res.accessToken;
      const newRefreshToken = res.refreshToken || refreshToken;

      /**
       * Save new tokens
       */
      saveToken(newAccessToken, newRefreshToken);

      /**
       * Update redux state
       */
      const decoded: any = decodeToken(newAccessToken);

      store.dispatch(
        setAuth({
          user: {
            userId: decoded.userId,
            roles: decoded.roles,
            permissions: decoded.permissions,
          },
          token: newAccessToken,
        }),
      );

      processQueue(null, newAccessToken);

      /**
       * Retry original request
       */
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return api(originalRequest);
    } catch (err) {
      processQueue(err, null);

      /**
       * Logout if refresh fails
       */
      clearToken();
      store.dispatch(clearAuth());

      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  },
);
