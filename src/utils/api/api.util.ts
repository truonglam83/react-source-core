// src/utils/api/api.util.ts

import axios from "axios";
import { ENV } from "@/constants/env";
import { store } from "@/store/store";
/**
 * Axios instance
 */
const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 10000,
});

/**
 * REQUEST INTERCEPTOR
 * Attach token before request
 */
api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.accessToken;

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * RESPONSE INTERCEPTOR
 * Handle global errors
 */
api.interceptors.response.use(
  (response) => {
    const res = response.data;
    /**
     * Handle standard API response
     * Format:
     * {
     *   code: number;
     *   message: string;
     *   data: any;
     * }
     */
    if (res && typeof res === "object" && "code" in res && "data" in res) {
      return res.data;
    }
    /**
     * Fallback:
     * - For APIs that don't use standard wrapper
     * Example:
     * { accessToken, refreshToken }
     */
    return res;
  },
  async (error) => {
    const originalRequest = error.config;

    /**
     * Handle 401 Unauthorized
     * TODO: implement refresh token later
     */
    if (error.response?.status === 401) {
      console.warn("Unauthorized - token may be expired");

      /**
       * TODO:
       * - Call refresh token API
       * - Retry original request
       * - Logout if refresh fails
       */
    }

    return Promise.reject(error);
  },
);

/**
 * Generic API call
 */
export const callApi = async <TRequest = any, TResponse = any>({
  url,
  method = "get",
  data,
  params,
}: {
  url: string;
  method?: "get" | "post" | "put" | "delete" | "patch"; // maybe only post for all requests
  data?: TRequest;
  params?: Record<string, any>;
}): Promise<TResponse> => {
  return api({
    url,
    method,
    data,
    params,
  });
};
