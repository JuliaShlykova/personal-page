import React from 'react'
import RoadWithTools from './RoadWithTools';
import '../../styles/About.scss'; 

const About = () => {
  return (
    <section id="about">
    <h2>About</h2>

    <RoadWithTools />


    <div className="text-block">
      I have been engaged in web development for over 4 years since I was inspired by developers community.
      <h3>Education</h3>
      My programming journey started with "Data science" program in Moscow university. 
      <br />
      While I was facsinated by programming opportunities, machine learning didn't interest me so I started exploring other fields and encountered wonderful <a className='text-emphasized' href="https://www.theodinproject.com/">Odin project</a> where I finished <strong>"Full Stack Javascript"</strong> program.

    </div>

    </section>
  )
}

export default About