/**
 * Decode JWT token
 * NOTE:
 * - Only decode payload
 * - Not secure (no signature verification)
 */

export const decodeToken = (token: string): Record<string, any> | null => {
  try {
    const payload = token.split(".")[1];

    if (!payload) return null;

    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
};

/**
 * Check token expired
 */
export const isTokenExpired = (token: string): boolean => {
  try {
    const base64 = token.split(".")[1];

    // 🔥 fix base64 decode
    const payload = JSON.parse(
      decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join(""),
      ),
    );

    if (!payload.exp) return false;

    const now = Date.now() / 1000;

    return payload.exp < now;
  } catch (e) {
    console.error("Decode error:", e);
    return true;
  }
};
