import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/pages/home";

import { Layout } from "@/ui/layout";

import { ROUTERS } from "@/shared/constants/routers";

const routes = [
  {
    path: ROUTERS.MAIN,
    element: <Layout />,
    children: [{ path: ROUTERS.MAIN, element: <HomePage /> }],
  },
];

export const router = createBrowserRouter(routes);
