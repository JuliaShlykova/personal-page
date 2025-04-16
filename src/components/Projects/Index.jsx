import React, {useEffect, useState} from 'react';
import { Trans, useTranslation } from 'react-i18next';
import '../../styles/Projects.scss';
import Slider from './Slider';

// {t('stating', { state, count: 1, ordinal: true })}



const Index = () => {

  return (
    <section id="projects">
      <h2>Main Projects</h2>
      <Slider />
      <div className="drag-element left" aria-hidden="true"><span className='drag-text'>Drag </span><span className='drag-hand'>&#9756;</span></div>
      <div className="drag-element right" aria-hidden="true"><span className='drag-text'>Drag </span><span className='drag-hand'>&#9758;</span></div>
      <p className='github-repositories-link'>View more projects on <a href="https://github.com/JuliaShlykova?tab=repositories" className='text-emphasized'>github</a></p>
    </section>
  )
}

export default Index