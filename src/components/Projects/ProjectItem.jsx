import React, { useEffect, useRef } from 'react'

const ProjectItem = ({project}) => {
  const refVideo = useRef(null);

  useEffect(() => {
    refVideo.current.muted = true;
  }, [])

  return (
    <div className='project-container'>
    <div className="video-wrapper">
      <video 
        ref={refVideo}
        autoPlay
        loop 
      >
        <source src={project["video-url"]} type="video/mp4" />
      </video>
      </div>
    </div>
  )
}

export default ProjectItem