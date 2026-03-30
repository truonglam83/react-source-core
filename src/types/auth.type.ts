// src/types/auth.type.ts

/**
 * Role type used across app
 */
export type Role = "ADMIN" | "USER";

/**
 * User info type
 */
export interface UserInfo {
  isAuthenticated: boolean;
  role: Role;
}
