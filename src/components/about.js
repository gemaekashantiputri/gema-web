import React from 'react';
import '../styles/about.css';

const About = () => {

  return (
    <>
      <div id="about">
        <div className="about-subtitle">#About</div>
        <div className="about-desc">
          I'm a third year student majoring in informatics engineering at the University of Muhammadiyah Purwokerto. I'm interested in machine learning and game development. outside of programming, I study UI/UX Design
        </div>
        <div className='about-image'>
          <img src='/gema-web/public/me1.jpeg' alt='gema'></img>
        </div>
      </div>
    </>
  );
}

export default About
