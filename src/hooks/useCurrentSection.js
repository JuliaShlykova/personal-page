import React, { useEffect, useState } from 'react'

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();

  return (
    rect.left >=0 &&
    rect.right <= (window.innerWidth) &&
    (rect.bottom >= (window.innerHeight / 2))
  )
}

const useCurrentSection = () => {
  const [sectionInView, setSectionInView] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const mainItems = document.querySelectorAll('section');
      for (let item of mainItems) {
        if (isElementInViewport(item)) {
          setSectionInView(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    // window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      // window.removeEventListener('load', handleScroll);
    }
  }, []);

  return sectionInView;
}

export default useCurrentSection