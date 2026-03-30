// src/routes/route.config.tsx

import { ReactNode } from "react";

/**
 * Define role type
 */
export type Role = "ADMIN" | "USER";

/**
 * Route type
 */
export interface AppRoute {
  path: string;
  element: ReactNode;
  isPrivate?: boolean;
  roles?: Role[];
}

/* ===== MOCK PAGES (replace later) ===== */

const LoginPage = () => <div>Login</div>;
const DashboardPage = () => <div>Dashboard</div>;
const SamplePage = () => <div>Sample</div>;

/* ===== ROUTES ===== */

export const routes: AppRoute[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DashboardPage />,
    isPrivate: true,
    roles: ["ADMIN", "USER"],
  },
  {
    path: "/sample",
    element: <SamplePage />,
    isPrivate: true,
    roles: ["ADMIN"],
  },
];
