import React from 'react';
import '../styles/about.css';

const About = () => {

  return (
    <>
      <div id="about">
        <div className="about-subtitle">#About</div>
        <div className="about-desc">
          Third-year student majoring in informatics engineering at University Muhammadiyah of Purwokerto. I'm interested in machine learning and game development.
        </div>
        <div className='about-image'>
          <img src='/assets/me.jpeg' alt='gema' />
        </div>
      </div>
    </>
  );
}

export default About
