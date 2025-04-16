import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { CiDark, CiLight } from "react-icons/ci";

const ThemeToggler = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      className="theme-toggle" 
      aria-label={darkTheme?'turn on light theme':'turn on dark theme'} 
      title={darkTheme?'turn on light theme':'turn on dark theme'}
      onClick={toggleTheme}
    >
      <CiDark />
      <CiLight />
  </button>
  )
}

export default ThemeToggler