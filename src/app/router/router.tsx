import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/ui/layout";

import { Home } from "../../pages/home/home";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
];

export const router = createBrowserRouter(routes);
