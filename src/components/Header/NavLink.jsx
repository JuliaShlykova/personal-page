import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const NavLink = ({ itemName, active=false }) => {
  const { t } = useTranslation();

  return (
    <a 
      href={'#'+itemName}
      className={active?'active':''}
    >
      {t(itemName)}
    </a>
  )
}

export default NavLink