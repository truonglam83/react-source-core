export type Role = "ADMIN" | "USER";

export const PERMISSIONS = {
  USER_READ: "user.read",
  USER_WRITE: "user.write",
  USER_DELETE: "user.delete",
  USER_UPDATE: "user.update",
  ADMIN_READ: "admin.read",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export interface User {
  userId: number;
  roles: Role[];
  permissions: Permission[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
}
