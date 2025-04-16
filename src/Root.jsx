import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Header from './components/Header/Index';
import { ThemeContext } from './context/ThemeContext';
import { useTranslation, Trans } from 'react-i18next';
import Home from './components/Home/Index';
import About from './components/About/Index';
import Projects from './components/Projects/Index';
import Blog from './components/Blog/Index';
import Contact from './components/Contact/Index';
import classNames from 'classnames';
import Cover from './components/Cover';

function Root() {
  const { darkTheme } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
        const anchorEl = document.getElementById(anchor);
        if (anchorEl) {
            anchorEl.scrollIntoView();
        }
    }
  }, []);

  return (
    <div className={classNames(darkTheme?'dark-theme':'light-theme', 'root-container')}>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Cover />
    </div>
  )
}

export default Root
