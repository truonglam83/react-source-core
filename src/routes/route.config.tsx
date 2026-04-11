import { Navigate } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import { RouteGuard } from "./route.guard";

import { HomePage } from "@/features/home";
import { TestRoleA } from "@/features/test/TestRoleA";
import { TestRoleB } from "@/features/test/TestRoleB";
import { LoginPage } from "@/features/login";

import { PERMISSIONS } from "@/types/auth.type";

export const routes = [
  /**
   * Public routes
   */
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },

  /**
   * Private routes
   */
  {
    path: "/",
    element: (
      <RouteGuard isPrivate>
        <MainLayout />
      </RouteGuard>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "test-role-a",
        element: (
          <RouteGuard permissions={[PERMISSIONS.USER_READ]}>
            <TestRoleA />
          </RouteGuard>
        ),
      },
      {
        path: "test-role-b",
        element: (
          <RouteGuard permissions={[PERMISSIONS.USER_WRITE]}>
            <TestRoleB />
          </RouteGuard>
        ),
      },
    ],
  },

  /**
   * Fallback
   */
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/403",
    element: <div>403 - Forbidden</div>,
  },
];
