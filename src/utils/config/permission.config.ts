// Can be get from backend
// In the future,
// Sample using: const PERMISSION_CONFIG = await fetch("/api/permissions");

export const PERMISSION_CONFIG: Record<string, string[]> = {
  USER: ["user.read"],
  ADMIN: ["user.read", "user.write"],
  // sample for future roles
  GUEST: ["guest.read"],
};
