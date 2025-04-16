import React, { useEffect, useState } from 'react'
import '../../styles/Header.scss';
import useMobileWidth from '../../hooks/useMobileWidth';
import Navigation from './Navigation';
import useCurrentSection from '../../hooks/useCurrentSection';
import classNames from 'classnames';
import Logo from './Logo';

const Header = () => { 
  const sectionInView = useCurrentSection();
  const isMobile = useMobileWidth();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', headerHeight - 1 + 'px');
  }, [])

  return (
    <>
    <header>
      <Logo active={sectionInView==="home"} />
      {
        isMobile
        ?<button 
            className={classNames('btn-mobile-menu', showMenu?'show-menu':'')} 
            onClick={() => setShowMenu(show=>show?false:true)}
            aria-label={showMenu?'close menu':'open menu'} 
            title={showMenu?'close menu':'open menu'}
          >
          <div className="stick"></div>
          <div className="stick"></div>
          <div className="stick"></div>
        </button>
        :<Navigation sectionInView={sectionInView} />
      }
      {isMobile
      ?<div className='mobile-menu' style={showMenu?{transform: "none"}:{}}>
        <Navigation sectionInView={sectionInView} />
      </div>
      :null
      }
    </header>

    </>
  )
}

export default Header