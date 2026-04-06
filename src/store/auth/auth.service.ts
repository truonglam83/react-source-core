import { ENV } from "@/constants/env";
import { setAuth, clearAuth } from "./auth.slice";
import { AppDispatch } from "@/store/store";
import { decodeToken } from "@/utils/auth/auth.utils";

/**
 * Auth Service
 *
 * RULE:
 * - Single place for token decoding & mapping
 * - Do NOT decode token anywhere else
 */

/**
 * 🔥 LOGIN WITH TOKEN (REAL FLOW)
 */
export const loginWithToken = (token: string) => (dispatch: AppDispatch) => {
  const decoded = decodeToken(token);

  if (!decoded) {
    console.error("Invalid token");
    return;
  }

  const user = {
    id: decoded.userId, // ⚠️ if backend change → ONLY fix here
    role: decoded.role,
  };

  dispatch(
    setAuth({
      accessToken: token,
      user,
    }),
  );
};

/**
 * 🧪 MOCK LOGIN
 */
export const loginMock = () => (dispatch: AppDispatch) => {
  const token = ENV.MOCK_AUTH?.TOKEN;

  const decoded = token ? decodeToken(token) : null;

  // 🔥 UPDATE: single mapping point
  const user = decoded
    ? {
        id: decoded.userId,
        role: decoded.role,
      }
    : {
        // fallback mock
        id: ENV.MOCK_AUTH?.USER_ID || "1",
        role: ENV.MOCK_AUTH?.ROLE || "USER",
      };

  dispatch(
    setAuth({
      accessToken: token || "mock-token",
      user,
    }),
  );
};

/**
 * 🚪 LOGOUT
 */
export const logout = () => (dispatch: AppDispatch) => {
  dispatch(clearAuth());
};
