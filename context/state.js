import { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case 'toggleTheme': {
      return !state;
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
}

export function ThemeProvider({ children }) {
  const [themeState, dispatch] = useReducer(themeReducer, true);

  const toggleTheme = (e) => {
    e.preventDefault();
    dispatch({ type: 'toggleTheme' });
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
