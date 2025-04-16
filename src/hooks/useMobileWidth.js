import React, { useEffect, useState } from 'react'

const isMobileWidth = () => {
  return window.innerWidth < 701;
}

const useMobileWidth = () => {
  const [isMobile, setIsMobile] = useState(isMobileWidth());

  useEffect(() => {
    const handleResizer = () => {
      setIsMobile(isMobileWidth());
    }

    window.addEventListener('resize', handleResizer);

    return () => window.removeEventListener('resize', handleResizer);
  }, [])

  return isMobile
}

export default useMobileWidth