import useSystemTheme, { SystemTheme } from "use-system-theme";
import { CustomTheme } from "../../@types/styled-components";
import { theme as _theme } from "../../config/theme";
import { useMemo, useState } from "react";
import { getSavedThemeMode, setSavedThemeMode } from "../../services/localStorageService";

export function useTheme() {
  const currentSystemThemeMode = useSystemTheme();

  const [ themeMode, setThemeMode ] = useState<SystemTheme>( getSavedThemeMode() as SystemTheme ?? currentSystemThemeMode );
  const [ theme, setTheme ] = useState<CustomTheme>( _theme[ themeMode ]);

  const changeTheme = () => {
    const themeModes = {
      light: "dark",
      dark: "light",
    };

    const newThemeMode = themeModes[ themeMode ] as SystemTheme;

    const newTheme = _theme[ newThemeMode ];

    setThemeMode( newThemeMode );
    setTheme( newTheme );

    setSavedThemeMode( newThemeMode );
  };

  return useMemo(() => ({
    theme,
    themeMode,
    changeTheme,
  }), [
    theme,
    themeMode,
  ]);
};
