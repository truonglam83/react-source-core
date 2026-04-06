// src/routes/route.guard.tsx
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { JSX } from "react";
import { useAppSelector } from "@/store/hooks";

export type Role = "ADMIN" | "USER";

interface Props {
  children: ReactNode;
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
 * - Use Redux as source of truth
 * - This file only handles routing logic
 */
export const RouteGuard = ({ children, isPrivate, roles }: Props) => {
  const user = useAppSelector((state) => state.auth.user);

  /**
   * Check authentication
   */

  if (isPrivate && !user) {
    return <Navigate to="/login" replace />;
  }

  /**
   * Check role permission
   */
  if (roles && user && !roles.includes(user.role)) {
    return <div>403 - Forbidden</div>;
  }

  return children;
};
