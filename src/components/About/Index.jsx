import React from 'react';
import RoadWithTools from './RoadWithTools';
import '../../styles/About.scss';

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>

      <RoadWithTools />

      <div className="text-block">
        <p>
          I have been engaged in web development for over 4 years since I was
          inspired by developers community.
        </p>
        <h3>Education</h3>
        <ul>
          <li>
            <b>Full Stack JavaScript</b> program by{' '}
            <a
              className="text-emphasized"
              href="https://www.theodinproject.com/"
            >
              {' '}
              Odin project{' '}
            </a>
          </li>
          <li>
            <b>Mid-Level Web Developer</b> professional training course by{' '}
            <a className="text-emphasized" href="https://practicum.yandex.ru/">
              Yandex
            </a>{' '}
            at the end of 2025
          </li>
        </ul>
        <h3>Collaboration</h3>
        <p>
          With other yandex students we develop html5 games like{' '}
          <a className="text-emphasized" href="https://zombie-shooter.online/">
            https://zombie-shooter.online
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default About;
