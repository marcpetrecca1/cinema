import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeState, setThemeState] = useState(true);

  const toggleTheme = (e, state) => {
    e.preventDefault();
    setThemeState(!state);
  };

  return (
    <ThemeContext.Provider value={{ themeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
