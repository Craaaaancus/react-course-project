import { useContext } from "react";
import { LocalStorageThemeKey, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const updatedTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(updatedTheme);
    localStorage.setItem(LocalStorageThemeKey, updatedTheme);
  }

  return {
    theme,
    toggleTheme
  }
}
