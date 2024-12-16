import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CaretLeft, Moon, SignOut, Sun } from "@phosphor-icons/react";

import { useStore } from "../../../store";

import { IconButton } from "../../Buttons/IconButton";

import { Actions, Content, Main, TopBar } from "../styles";

export const AdminLayout = () => {
  const {
    themeMode,
    changeTheme,
    storeLogout,
  } = useStore();

  return (
    <Main>
      <TopBar>
        <Actions />

        <h1>COOPER FILME</h1>

        <Actions>
          <IconButton color="primary" onClick={ changeTheme }>
            {
              themeMode === "dark"
                ? <Sun />
                : <Moon />
            }
          </IconButton>

          <div />

          <IconButton color="primary" onClick={ storeLogout }>
            <SignOut />
          </IconButton>
        </Actions>
      </TopBar>

      <Content>
        <Outlet />
      </Content>
    </Main>
  );
};
