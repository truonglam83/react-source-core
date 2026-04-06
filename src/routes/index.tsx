import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteGuard } from "./route.guard";
import { routes } from "./route.config";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <RouteGuard isPrivate={route.isPrivate} roles={route.roles}>
                {route.element}
              </RouteGuard>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
