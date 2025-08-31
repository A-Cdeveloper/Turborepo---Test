import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const RouterLayout = () => {
  return <RouterProvider router={router} />;
};

export default RouterLayout;
