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

  MOCK_AUTH: {
    TOKEN: import.meta.env.VITE_MOCK_TOKEN,
    ROLE: import.meta.env.VITE_MOCK_ROLE,
    USER_ID: import.meta.env.VITE_MOCK_USER_ID,
  },
};
