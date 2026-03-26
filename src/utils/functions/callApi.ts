import axios from "axios";
import type { AxiosRequestConfig, Method } from "axios";
import { GET } from "../constants/method";
import type { ApiResponse } from "./api.types";

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10000,
});
const getToken = () => localStorage.getItem("token");

// request interceptor
instance.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const callApi = async <T = any>({
  endpoint,
  method = GET,
  data,
  params,
}: {
  endpoint: string;
  method?: Method;
  data?: any;
  params?: any;
}): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      url: endpoint,
      method,
      data,
      params,
    };

    const res = await instance(config);

    const response: ApiResponse<T> = res.data;

    // 👉 handle business error
    if (response.code !== 0) {
      throw new Error(response.message || "Something went wrong");
    }

    return response.data;
  } catch (error: any) {
    // 👉 network / server error
    const message =
      error.response?.data?.message || error.message || "Network error";

    throw new Error(message);
  }
};
