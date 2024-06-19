import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

const withFallback = Component => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: withFallback(lazy(() => import("./pages/Home"))),
      },
      {
        path: "/about",
        element: withFallback(lazy(() => import("./pages/About"))),
      },
    ],
  },
]);
