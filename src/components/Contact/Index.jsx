import React from 'react'
import Footer from './Footer';
import '../../styles/Contact.scss';
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact">
    <h2>Contact me</h2>
    <p>Please get in touch if you are interested in the collaboration:</p>
    <ul className='contact-links'>
      <li>
        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=julia.shlykova17@gmail.com">
          <div className="icon-container"><IoIosMail /></div>
          Send email
        </a>
      </li>
      <li>
        <a href="https://github.com/JuliaShlykova" title='GitHub'>
        <div className="icon-container">
        <FaGithub />
        </div>
        GitHub
        </a>
      </li>
      <li>
        <a href="https://hh.ru/resume/b3cdeaf4ff0d3d07740039ed1f78794d734f4d">
        <div className="icon-container">
          <img src="/hh.png" alt="" />
        </div>
          HeadHunter
        </a>
      </li>
    </ul>
    
    <p>I am eager to participate in fascinating projects and hands-on applications. Feel free to contact me if you'd like to chat, assist, or collaborate on a project.</p>
    <div className="contact-decor"></div>
      <Footer />
    </section>
  )
}

export default Contact