import React, { useEffect, useRef, useState } from 'react';
import Slide from './Slide';
import useMobileWidth from '../../hooks/useMobileWidth';
import projectsData from '../../assets/projectsData.json';

const n = projectsData.length;

const getTranslateXValue = (i) => {
  return window.innerWidth < 701
    ? -window.innerWidth * (i + 1)
    : -(5 / 3 + i) * window.innerWidth * 0.6;
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const isMobile = useMobileWidth();

  useEffect(() => {
    const changeSlider = () => {
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(${getTranslateXValue(slideIndex)}px)`;
      }
    };

    window.addEventListener('resize', changeSlider);

    return () => window.removeEventListener('resize', changeSlider);
  }, [slideIndex]);

  useEffect(() => {
    if (sliderRef.current) {
      const nodeSlider = sliderRef.current;

      let i = 0,
        allowShift = true,
        limit = 100,
        x1 = 0,
        x2 = 0;

      const checkIndex = () => {
        nodeSlider.classList.remove('shifting');
        if (i === -1) {
          i = n - 1;
        } else if (i === n) {
          i = 0;
        }
        setSlideIndex(i);
        allowShift = true;
      };

      const shiftSlide = (dir) => {
        nodeSlider.classList.add('shifting');
        if (allowShift) {
          if (dir === 1) {
            nodeSlider.style.transform = `translateX(${getTranslateXValue(i + 1)}px)`;
            i++;
          } else {
            nodeSlider.style.transform = `translateX(${getTranslateXValue(i - 1)}px)`;
            i--;
          }
          allowShift = false;
        }
      };

      const handleEnd = (e) => {
        if (x2 - x1 > limit) {
          shiftSlide(-1);
        } else if (x2 - x1 < -limit) {
          shiftSlide(1);
        } else {
          nodeSlider.style.transform = `translateX(${getTranslateXValue(i)}px)`;
        }

        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
      };

      const handleMove = (e) => {
        if (e.type === 'touchmove') {
          x2 = e.touches[0].clientX;
        } else {
          x2 = e.clientX;
        }
        nodeSlider.style.transform = `translateX(${getTranslateXValue(i) + x2 - x1}px)`;
      };

      const handleClick = (e) => {
        e.preventDefault();

        if (e.type === 'touchstart') {
          x1 = x2 = e.touches[0].clientX;
        } else {
          x1 = x2 = e.clientX;

          document.addEventListener('mousemove', handleMove);
          document.addEventListener('mouseup', handleEnd);
        }
      };

      nodeSlider.addEventListener('mousedown', handleClick);

      nodeSlider.addEventListener('touchstart', handleClick);
      nodeSlider.addEventListener('touchend', handleEnd);
      nodeSlider.addEventListener('touchmove', handleMove);

      nodeSlider.addEventListener('transitionend', checkIndex);

      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        nodeSlider.removeEventListener('mousedown', handleClick);
        nodeSlider.removeEventListener('touchstart', handleClick);
        nodeSlider.removeEventListener('touchend', handleEnd);
        nodeSlider.removeEventListener('touchmove', handleMove);
        nodeSlider.removeEventListener('transitionend', checkIndex);
      };
    }
  }, []);

  return (
    <ul
      className="slider"
      ref={sliderRef}
      style={{ transform: `translateX(${getTranslateXValue(slideIndex)}px)` }}
    >
      {isMobile ? null : (
        <Slide project={projectsData[n - 2]} aria-hidden="true" />
      )}
      <Slide project={projectsData[n - 1]} aria-hidden="true" />
      {projectsData.map((project, i) => (
        <Slide key={i} project={project} active={slideIndex === i} />
      ))}
      <Slide project={projectsData[0]} aria-hidden="true" />
      {isMobile ? null : <Slide project={projectsData[1]} aria-hidden="true" />}
    </ul>
  );
};

export default Slider;
