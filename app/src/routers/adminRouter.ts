import {
  createBrowserRouter,
} from "react-router-dom";

import { AdminLayout } from "../components/Layouts/AdminLayout";

import { Home } from "../pages/Admin/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AdminLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
    ]
  },
]);

export default router;
