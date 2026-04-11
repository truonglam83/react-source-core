// src/utils/auth/permission-resolver.ts

import { Permission } from "@/store/auth/auth.type";
import { PERMISSION_CONFIG } from "../config/permission.config";

/**
 * Resolve user permissions
 * - Prefer permissions from token (backend)
 * - Fallback to config (mock)
 */
export const resolvePermissions = (
  roles: string[],
  tokenPermissions?: string[],
): Permission[] => {
  // Use backend permissions if available
  if (tokenPermissions?.length) {
    return tokenPermissions as Permission[];
  }

  // Fallback: map roles → permissions
  const permissions = roles.flatMap((role) => PERMISSION_CONFIG[role] || []);

  // Remove duplicates
  return Array.from(new Set(permissions)) as Permission[];
};
