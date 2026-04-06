import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteGuard } from "./route.guard";
import { routes } from "./route.config";

/**
 * Recursive render routes
 */
const renderRoutes = (routes: any[]) => {
  return routes.map((route, index) => {
    /**
     * Layout route (has children)
     */
    if (route.children) {
      return (
        <Route
          key={index}
          element={
            route.element // layout
          }
        >
          {renderRoutes(route.children)}
        </Route>
      );
    }

    /**
     * Leaf route (page)
     */
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <RouteGuard isPrivate={route.isPrivate} roles={route.roles}>
            {route.element}
          </RouteGuard>
        }
      />
    );
  });
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
};
