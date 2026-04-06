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
