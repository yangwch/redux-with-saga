import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Loading from "./components/Loading";

const withFallback = Component => {
  return (
    <Suspense fallback={<Loading />}>
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
