import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import { RouteGuard } from "./route.guard";
import { routes } from "./route.config";

/**
 * Recursive render routes
 */
const AppRoutes = () => {
  return useRoutes(routes);
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
