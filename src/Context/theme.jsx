/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// custom hook to use context
const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
