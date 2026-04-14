import React, { useEffect, useRef } from 'react';
import Road from './Road';
import useCurrentSection from '../../hooks/useCurrentSection';

const RoadWithTools = () => {
  const sectionInView = useCurrentSection();
  const roadContainerRef = useRef(null);

  useEffect(() => {
    if (sectionInView === 'about' && roadContainerRef.current) {
      roadContainerRef.current.style.display = 'block';
    }

    return () => {
      if (roadContainerRef.current) {
        roadContainerRef.current.style.display = 'none';
      }
    };
  }, [sectionInView]);

  return (
    <div id="road-container-wrapper">
      <div id="road-container" ref={roadContainerRef}>
        <Road />
        <div className="tool-sign">
          <img
            src={`${import.meta.env.BASE_URL}/icons-tools/html.svg`}
            alt="html"
            title="html"
          />
        </div>
        <div className="tool-sign">
          <img
            src={`${import.meta.env.BASE_URL}/icons-tools/css.svg`}
            alt="css"
          />
        </div>
        <div className="tool-sign">
          <img
            src={`${import.meta.env.BASE_URL}/icons-tools/javascript.svg`}
            alt="javascript"
          />
        </div>
        <div className="tool-sign">
          {' '}
          <img
            src={`${import.meta.env.BASE_URL}/icons-tools/react.svg`}
            alt="react"
          />{' '}
        </div>
        <div className="tool-sign">
          {' '}
          <img
            src={`${import.meta.env.BASE_URL}/icons-tools/nodejs.svg`}
            alt="nodejs"
          />{' '}
        </div>
        <div className="tool-sign">
          <img
            src={`${import.meta.env.BASE_URL}/icons-tools/expressjs.svg`}
            alt="express"
          />
        </div>
        <div className="tool-sign">
          {' '}
          <img
            src={`${import.meta.env.BASE_URL}/icons-tools/mongodb.svg`}
            alt="mongodb"
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default RoadWithTools;
