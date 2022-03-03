import React from 'react';
import '../styles/intro.css';
import Sidebar from './sidebar-logos';

const Landing = () => {

  return (
    <><div id="nav">
      <center>
        <a href='/'>Home</a>
        <a href='#about'>About</a>
        <a href='#experience'>Experience</a>
        <a href='#work'>Work</a>
      </center>
    </div>
      <div id="intro">
        <div className="intro-subtitle">Hi, it’s Gema Eka Shanti Putri</div>
        <div className="intro-desc">
          I’m Front end developer and designer from Purwokerto.
          I have interest in Web developer, Design, Illustration, Machine Learning.
        </div>
      </div>
      <Sidebar></Sidebar>
    </>
  );
}

export default Landing
