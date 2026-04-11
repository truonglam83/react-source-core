// src/store/auth/auth.service.ts

import { AppDispatch } from "@/store/store";
import { decodeToken } from "@/utils/auth/auth.utils";
import { resolvePermissions } from "@/utils/auth/permission-resolver";
import { setAuth } from "./auth.slice";
import { PermissionType, Role } from "@/types/auth.type";

/**
 * Login with JWT
 */
export const loginWithToken = (token: string) => (dispatch: AppDispatch) => {
  const decoded: any = decodeToken(token);

  const roles: Role[] = decoded.roles || (decoded.role ? [decoded.role] : []);

  const permissions = resolvePermissions(
    roles,
    decoded.permissions,
  ) as PermissionType[];

  dispatch(
    setAuth({
      user: {
        userId: decoded.userId,
        roles,
        permissions,
      },
      token,
    }),
  );
};
