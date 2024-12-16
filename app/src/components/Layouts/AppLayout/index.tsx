import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CaretLeft, Moon, Sun } from "@phosphor-icons/react";

import { useStore } from "../../../store";

import { IconButton } from "../../Buttons/IconButton";

import { Actions, Content, Main, TopBar } from "../styles";

export const AppLayout = () => {
  const {
    themeMode,
    changeTheme,
  } = useStore();

  const {
    pathname,
  } = useLocation();

  const navigate = useNavigate();

  return (
    <Main>
      <TopBar>
        <Actions>
          {
            pathname !== "/"
              ? (
                  <IconButton color="primary" onClick={() => navigate( - 1 )}>
                    <CaretLeft />
                  </IconButton>
                )
              : (<div />)
          }
        </Actions>

        <h1>COOPER FILME</h1>

        <Actions>
          {
            pathname === "/"
              ? (
                  <IconButton color="primary" onClick={() => navigate("/admin/login")}>
                    <span>Entrar</span>
                  </IconButton>
                )
              : (<div />)
          }

          <IconButton color="primary" onClick={ changeTheme }>
            {
              themeMode === "dark"
                ? <Sun />
                : <Moon />
            }
          </IconButton>
        </Actions>
      </TopBar>

      <Content>
        <Outlet />
      </Content>
    </Main>
  );
};
