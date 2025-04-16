import React from 'react'
import '../../styles/Home.scss';
import Decor from './Decor';
import useCurrentSection from '../../hooks/useCurrentSection';

const Index = () => {
	const sectionInView = useCurrentSection();

  return (
    <section id="home">
    <Decor />


    <div className="text-block">
      <div className="home-header">
        <div className="large-text">Julia Shlykova</div>
        <div className="middle-text"><span className='text-emphasized'>MERN</span> stack developer</div>
      </div>
      <div className="home-description">
        Passionate self-taught web developer with the aptitude for creating functional and visually appealing web applications
      </div>
    </div>
    
    <div className="scroll-down">scroll down</div>
    
    </section>
  )
}

export default Index