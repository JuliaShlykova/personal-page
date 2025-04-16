import React from 'react'
import useMobileWidth from '../../hooks/useMobileWidth';

const Logo = ({active}) => {
  const isMobile = useMobileWidth();

  return (
    <div className='logo-container'>
    <a 
      href="#home" 
      title="Julia Shlykova"
      className={active?'active':''}
    >
      <div>J</div>
      {isMobile?<span>ulia</span>:null}
      <div>S</div>
      {isMobile?<span>lykova</span>:null}
    </a>
    </div>
  )
}

export default Logo