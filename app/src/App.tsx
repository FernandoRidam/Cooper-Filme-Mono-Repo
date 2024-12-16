import styled, { ThemeProvider } from "styled-components";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";

import { StateProvider, useStore } from "./store";
import appRouter from "./routers/appRouter";
import adminRouter from "./routers/adminRouter";
import { IconContext } from "@phosphor-icons/react";
import { Loading } from "./components/Loading";

const autoHideDuration = 2000;

const StyledMaterialDesignContent = styled( MaterialDesignContent )(({ theme }) => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: theme.colors.success.default,
  },
  "&.notistack-MuiContent-warning": {
    backgroundColor: theme.colors.warning.default,
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: theme.colors.error.default,
  },
}));

function App() {
  return (
    <StateProvider>
      <Content />
    </StateProvider>
  );
}

function Content() {
  const {
    theme,
    user,
  } = useStore();

  return (
    <ThemeProvider theme={ theme }>
      <IconContext.Provider
        value={{
          size: 24,
          weight: "bold",
        }}
      >
        <SnackbarProvider
          autoHideDuration={ autoHideDuration }
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          maxSnack={ 3 }
          Components={{
            success: StyledMaterialDesignContent,
            default: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
            warning: StyledMaterialDesignContent,
          }}
        >
          <RouterProvider
            router={ Boolean( user ) ? adminRouter : appRouter }
          />

          <Loading />
        </SnackbarProvider>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
