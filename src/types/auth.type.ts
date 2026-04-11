// src/types/auth.type.ts

export type Role = "ADMIN" | "USER";

/**
 * Permission constants
 */
export const PERMISSIONS = {
  USER_READ: "user.read",
  USER_WRITE: "user.write",
  USER_DELETE: "user.delete",
  USER_UPDATE: "user.update",

  ADMIN_READ: "admin.read",
} as const;

export type PermissionType = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

/**
 * User (core entity)
 */
export interface User {
  userId: number;
  roles: Role[]; // multi-role
  permissions: PermissionType[];
}

/**
 * Auth state
 */
export interface AuthState {
  user: User | null;
  token: string | null;
}
