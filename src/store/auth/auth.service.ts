// Handle login logic

import { AppDispatch } from "@/store/store";
import { setAuth } from "./auth.slice";
import { decodeToken } from "@/utils/auth/auth.utils";
import { resolvePermissions } from "@/utils/auth/permission-resolver";
import { saveToken } from "@/utils/auth/auth.storage";

export const loginWithToken =
  (accessToken: string, refreshToken: string) => (dispatch: AppDispatch) => {
    const decoded: any = decodeToken(accessToken);

    const roles = decoded.roles || (decoded.role ? [decoded.role] : []);
    const permissions = resolvePermissions(roles, decoded.permissions);

    // Save tokens
    saveToken(accessToken, refreshToken);

    // Update state
    dispatch(
      setAuth({
        user: {
          userId: decoded.userId,
          roles,
          permissions,
        },
        token: accessToken,
      }),
    );
  };
