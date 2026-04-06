import { HomePageTest } from "@/features/test/HomePageTest";
import { LoginPageTest } from "@/features/test/LoginPageTest";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

export const routes = [
  /**
   * 🔐 AUTH ROUTES (NO HEADER / FOOTER)
   */
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPageTest />,
        isPrivate: false,
      },
    ],
  },

  /**
   * 🌐 MAIN ROUTES (WITH HEADER / FOOTER)
   */
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePageTest />,
        isPrivate: true,
      },
    ],
  },
];
