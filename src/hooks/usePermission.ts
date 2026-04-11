// src/hooks/usePermission.ts

import { useAppSelector } from "@/store/hooks";
import { PermissionType } from "@/types/auth.type";

/**
 * Permission helper hook
 */
export const usePermission = () => {
  const user = useAppSelector((state) => state.auth.user);

  const hasPermission = (permission: PermissionType) => {
    return !!user?.permissions.includes(permission);
  };

  const hasAnyPermission = (permissions: PermissionType[]) => {
    return !!user?.permissions.some((p) => permissions.includes(p));
  };

  return { hasPermission, hasAnyPermission };
};
