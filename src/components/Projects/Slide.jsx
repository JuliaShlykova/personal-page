import classNames from 'classnames'
import React, { memo, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import useCurrentSection from '../../hooks/useCurrentSection';

const preventPropagation = (n) => {
  n.addEventListener('touchstart', e=>e.stopPropagation());
  n.addEventListener('mousedown', e=>e.stopPropagation());
}

const Slide = ({active, project}) => {
  const refVideo = useRef(null);
	const sectionInView = useCurrentSection();

  useEffect(() => {
    if (refVideo.current) {
    if (sectionInView==="projects") {
      refVideo.current.play();
    } else {
      refVideo.current.pause();
    }
  }
  }, [sectionInView]);

  useEffect(() => {
    if (refVideo.current) {
      refVideo.current.muted = true;
    }
  }, [])

  return (
    <li className={classNames("slide", {active})}>
    <div className="video-wrapper" aria-hidden="true">
      <video 
        ref={refVideo}
        loop
      >
        <source src={project["video-url"]} type="video/mp4" />
      </video>
    </div>  
    <div className="slide-header">
      <h3 ref={node=>node?preventPropagation(node):null}>{project.name}</h3>
      <div 
        className="links"
        ref={node=>node?preventPropagation(node):null}
      >
        <a href={project["demo-url"]} title="visit"><RiExternalLinkFill /></a>
        <a href={project["github-url"]} title="github"><FaGithub /></a>
      </div>
    </div>
    <div className="slide-description" ref={node=>node?preventPropagation(node):null}>{project.description}</div>
    <ul className="tools">
      {project.tools.map((tool,i) => (
        <li key={i} title={tool}>
          <img src={`/icons-tools/${tool.toLowerCase()}.svg`} alt={tool} />
        </li>
      ))}
    </ul>
    </li>
  )
};

export default Slide
