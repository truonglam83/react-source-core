// src/routes/route.guard.tsx

import { Navigate } from "react-router-dom";
import { JSX } from "react";
import { getUser } from "@/utils/auth/auth.utils";

export type Role = "ADMIN" | "USER";

interface Props {
  children: JSX.Element;
  isPrivate?: boolean;
  roles?: Role[];
}

/**
 * Route Guard
 *
 * Responsibilities:
 * - Check authentication
 * - Check role permission
 *
 * NOTE:
 * - User info is handled in utils/auth
 * - This file only handles routing logic
 */
export const RouteGuard = ({ children, isPrivate, roles }: Props) => {
  const user = getUser();

  /**
   * Check authentication
   */
  if (isPrivate && !user.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  /**
   * Check role permission
   */
  if (roles && !roles.includes(user.role)) {
    return <div>403 - Forbidden</div>;
  }

  return children;
};
