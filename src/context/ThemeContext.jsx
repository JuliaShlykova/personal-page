import React, { createContext, useReducer, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [darkTheme, toggleTheme] = useReducer(a=>!a, true);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }