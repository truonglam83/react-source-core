// src/constants/env.ts

/**
 * Read and validate environment variables
 */

const getEnv = (key: string, value?: string) => {
  // Throw error if missing env
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const ENV = {
  API_BASE_URL: getEnv("VITE_API_BASE_URL", import.meta.env.VITE_API_BASE_URL),

  // Optional value with fallback
  APP_NAME: import.meta.env.VITE_APP_NAME || "App",

  /**
   * TEMP: default role for development
   * Used when no token is available
   * TODO: REMOVE when auth is fully implemented
   */
  DEFAULT_ROLE: import.meta.env.VITE_DEFAULT_ROLE || "USER",
};
