import { STORAGE_KEYS } from "@/constants/storage.constant";

/**
 * Save token
 */
export const saveToken = (token: string, refreshToken: string) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
};

/**
 * Get token
 */
export const getToken = () => {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Get refresh token
 ¡¡*/
export const getRefreshToken = () => {
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Clear token
 */
export const clearToken = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
};
