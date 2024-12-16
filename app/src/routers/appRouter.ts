import {
  createBrowserRouter,
} from "react-router-dom";

import { AppLayout } from "../components/Layouts/AppLayout";

import { Home } from "../pages/Client/Home";
import { ScreenPlays } from "../pages/Client/ScreenPlays";
import { ScreenPlaySend } from "../pages/Client/ScreenPlaySend";

import { Login } from "../pages/Client/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/admin/login",
        Component: Login,
      },
      {
        path: "/client",
        children: [
          {
            path: "screenplays",
            children: [
              {
                path: "",
                Component: ScreenPlays,
              },
              {
                path: ":email",
                Component: ScreenPlays,
              },
            ]
          },
          {
            path: "screenplays/send",
            Component: ScreenPlaySend,
          },
        ],
      },
    ]
  },
]);

export default router;
