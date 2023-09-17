import React from 'react';
import '../styles/about.css';

const About = () => {

  return (
    <>
      <div id="about">
        <div className="about-subtitle">#About</div>
        <div className="about-desc">
          Fresh graduate of Informatics Engineering student at University Muhammadiyah Purwokerto, Central Java, Indonesia. I currently focus on UX Design
        </div>
        <div className='about-image'>
          <img src='/assets/me.jpeg' alt='gema' />
        </div>
      </div>
    </>
  );
}

export default About
