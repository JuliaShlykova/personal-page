import React from 'react'
import NavLink from './NavLink';
import LangToggler from './LangToggler';
import ThemeToggle from './ThemeToggler'
import useCurrentSection from '../../hooks/useCurrentSection';

const navItems = ['about', 'projects', 'blog', 'contact'];

const Navigation = ({sectionInView}) => {


  return (
    <><nav>
      <ul>
      {navItems.map(item=>(
        <li key={item}>
          <NavLink itemName={item} active={sectionInView===item} />
        </li>
      ))}
      </ul>
    </nav>
    <div id='toggler-container'>
      <ThemeToggle />
      <LangToggler />
    </div>
    </>
  )
}

export default Navigation