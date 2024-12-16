const themeModeLocalStorageKey = "Chat@ThemeMode";

export const getSavedThemeMode = () => {
  return localStorage.getItem( themeModeLocalStorageKey );
};

export const setSavedThemeMode = ( newThemeMode: string ) => {
  localStorage.setItem( themeModeLocalStorageKey, newThemeMode );
};
