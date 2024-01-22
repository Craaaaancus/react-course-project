import React, { FC, PropsWithChildren, useMemo, useState } from "react"
import { LocalStorageThemeKey, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme = localStorage.getItem(LocalStorageThemeKey) as Theme || Theme.LIGHT

const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])
  
  return (
    <ThemeContext.Provider value={defaultProps}>
      {props.children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;
