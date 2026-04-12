import { STORAGE_KEYS } from "@/constants/storage.constant";

/**
 * Save token
 */
export const saveToken = (token: string) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
};

/**
 * Get token
 */
export const getToken = () => {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Clear token
 */
export const clearToken = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
};
