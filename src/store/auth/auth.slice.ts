// src/store/auth/auth.slice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, PermissionType, Role, User } from "@/types/auth.type";
import { clearToken, getToken } from "@/utils/auth/auth.storage";
import { decodeToken, isTokenExpired } from "@/utils/auth/auth.utils";
import { resolvePermissions } from "@/utils/auth/permission-resolver";

/**
 * Build user from token
 */
const buildUserFromToken = (token: string) => {
  try {
    const decoded: any = decodeToken(token);

    const roles: Role[] = decoded.roles || (decoded.role ? [decoded.role] : []);

    const permissions: PermissionType[] = resolvePermissions(
      roles,
      decoded.permissions,
    ) as PermissionType[];

    return {
      userId: decoded.userId,
      roles,
      permissions,
    };
  } catch {
    return null;
  }
};

/**
 * Init state (auto login + check expire)
 */
const token = getToken();

let user: User | null = null;
let validToken: string | null = null;

if (token) {
  try {
    if (!isTokenExpired(token)) {
      user = buildUserFromToken(token);
      validToken = token;
    } else {
      clearToken();
    }
  } catch {
    user = null;
  }
}

const initialState: AuthState = {
  user,
  token: validToken,
};

/**
 * Auth slice
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Set auth data after login
     */
    setAuth: (
      state,
      action: PayloadAction<{
        user: User;
        token: string;
      }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    /**
     * Clear auth (logout)
     */
    clearAuth: (state) => {
      state.user = null;
      state.token = null;

      clearToken(); // clear storage
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
