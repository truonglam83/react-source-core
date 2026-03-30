// src/constants/env.ts

/**
 * Read & validate environment variables
 */

const getEnv = (key: string, value?: string) => {
  if (!value) {
    throw new Error(`Missing env: ${key}`);
  }
  return value;
};

export const ENV = {
  API_BASE_URL: getEnv("VITE_API_BASE_URL", import.meta.env.VITE_API_BASE_URL),

  APP_NAME: import.meta.env.VITE_APP_NAME || "App",

  /**
   * TEMP ROLE (IMPORTANT)
   * Used when token is not available
   * TODO: REMOVE after auth system is ready
   */
  DEFAULT_ROLE: import.meta.env.VITE_DEFAULT_ROLE || "USER",
};
