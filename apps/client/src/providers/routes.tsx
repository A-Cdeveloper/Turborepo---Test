import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import SingleCarPage from "../pages/SingleCarPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cars",
        children: [
          {
            path: ":id",
            element: <SingleCarPage />,
          },
        ],
      },
    ],
  },
]);

const RouterLayout = () => {
  return <RouterProvider router={router} />;
};

export default RouterLayout;
