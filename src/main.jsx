import React from 'react'
import ReactDOM from 'react-dom/client';
import Root from './Root';
import { ThemeProvider } from './context/ThemeContext';
import './styles/reset.css';
import './styles/index.scss';

import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider>
    <Root />
  </ThemeProvider>
  </React.StrictMode>
);
