import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { PermissionType } from "@/types/auth.type";

interface Props {
  children: React.ReactNode;
  isPrivate?: boolean;
  permissions?: PermissionType[];
}

export const RouteGuard = ({
  children,
  isPrivate = true, // 🔥 default private
  permissions,
}: Props) => {
  const user = useAppSelector(
    (state) => state.auth.user as { permissions: PermissionType[] } | null,
  );

  /**
   * 1. Private route but not logged in → go login
   */
  if (isPrivate && !user) {
    return <Navigate to="/login" replace />;
  }

  /**
   * 2. Public route (login) but already logged in → go home
   */
  if (isPrivate === false && user) {
    return <Navigate to="/" replace />;
  }

  /**
   * 3. Permission check
   */
  if (permissions?.length && user) {
    const hasAccess = permissions.some((p) => user.permissions.includes(p));

    if (!hasAccess) {
      return <Navigate to="/403" replace />;
    }
  }

  return children;
};
