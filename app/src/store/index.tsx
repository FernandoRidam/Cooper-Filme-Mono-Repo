import {
  ReactNode,
  createContext,
  useContext,
} from "react";

import { SystemTheme } from "use-system-theme";

import { useLoading } from "./hooks/useLoading";
import { useTheme } from "./hooks/useTheme";

import { CustomTheme } from "../@types/styled-components";
import { theme } from "../config/theme";
import { User } from "../models/UserModel";
import { useUser } from "./hooks/useUser";

export interface UseContext {
  theme: CustomTheme;
  themeMode: SystemTheme;
  changeTheme: () => void;
  loading: boolean;
  openLoading: () => void;
  closeLoading: () => void;
  user: User | null;
  storeLogin: ( user: User ) => void;
  storeLogout: () => void;
};

export interface DefaultComponentProps {
  children: ReactNode;
};

export interface StateProviderProps extends DefaultComponentProps { };

export const store = createContext<UseContext>({
  theme: theme.light,
  themeMode: "light",
  changeTheme: () => {},
  loading: false,
  openLoading: () => {},
  closeLoading: () => {},
  user: null,
  storeLogin: () => {},
  storeLogout: () => {},
});

const { Provider } = store;

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const theme = useTheme();
  const loading = useLoading();
  const user = useUser();

  return (
    <Provider
      value={{
        ...theme,
        ...loading,
        ...user,
      }}
    >{children}</Provider>
  );
};

export const useStore = () => useContext(store);
