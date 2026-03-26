import type { AppRoute } from "./route.type";
import SamplePage from "@/features/sample";

export const routes: AppRoute[] = [
  {
    path: "/",
    element: <SamplePage />,
  },
];
