// src/utils/auth/auth.util.ts

import { ENV } from "@/constants/env";
import { Role, UserInfo } from "@/types/auth.type";

/**
 * Decode JWT token
 * NOTE:
 * - Only decode payload
 * - Not secure (no signature verification)
 */
const decodeToken = (token: string) => {
  try {
    const payload = token.split(".")[1];

    if (!payload) return null;

    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
};

/**
 * Get current user info
 *
 * Priority:
 * 1. Token (localStorage)
 * 2. ENV fallback (TEMP)
 *
 * IMPORTANT:
 * - ENV fallback is only for development
 * - MUST REMOVE when auth system is ready
 */

export const getUser = (): UserInfo => {
  const token = localStorage.getItem("accessToken");

  // If token exists → decode
  if (token) {
    const decoded = decodeToken(token);

    return {
      isAuthenticated: true,
      role: (decoded?.role as Role) || (ENV.DEFAULT_ROLE as Role),
      // future: userId, permissions...
    };
  }

  /**
   * TEMP fallback (IMPORTANT)
   * Used when no token
   * MUST REMOVE later
   */
  return {
    isAuthenticated: false,
    role: ENV.DEFAULT_ROLE as Role,
  };
};

/**
 * Get access token from localStorage
 */
export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};
