import React, { useEffect, useRef } from 'react';
import useCurrentSection from '../../hooks/useCurrentSection';

const getDrawingParameters = (path) => {
	const length = path.getTotalLength();
	path.style.strokeDasharray = length;
	const drawingProperties = [
		{ strokeDashoffset: length, easing: "ease-in"  },
		{ strokeDashoffset: 0, offset: 1 }
	];
	return drawingProperties;
};

const animatePath = (path, time, count) => {
  path.animate(getDrawingParameters(path), {duration: time, iterations: count});
}

const Road = () => {
  const pathRef = useRef(null);
  const path2Ref = useRef(null);
  const sectionInView = useCurrentSection();


  useEffect(() => {
    // if(sectionInView==="about") {
      if (pathRef.current) {
        animatePath(pathRef.current, 10000, 1);
      }
      if (path2Ref.current) {
        animatePath(path2Ref.current, 10000, 1);
      }
    // }

  }, [sectionInView])

  return (
    <div>
    {/* <div className="road-container"  style={sectionInView==='about'?{}:{display:'none'}}> */}
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1256.82 695.02">
    <path ref={pathRef} d="M560.5.5s-174,25.92-174,66.32,638-41.53,642,94.93-649,43-652,104.78,845-20.56,878,187.56S861,601.23,856,695"/>
    <path ref={path2Ref} d="M560.5.5s-279,36.59-255,90.72S938.55,63.85,903,154c-28,71-775.5-20.11-776.5,112.53s976.7,102.85,911,179.18C977,516,1,512,.5,695"/>
    </svg>
    </div>
  )
}

export default Road