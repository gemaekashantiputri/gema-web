import React from 'react';
import '../styles/intro.css';
import Sidebar from './sidebar-logos';

const Landing = () => {

  return (
    <>
      <div id="nav">
        <a href='#intro'>Home</a>
        <a href='#about'>About</a>
        <a href='#experience'>Experience</a>
        <a href='#work'>Work</a>
      </div>
      <div id="intro">
        <div className="intro-subtitle">Hi, it’s Gema Eka Shanti Putri</div>
        <div className="intro-desc">
          I'm a UI/UX Designer based in Purwokerto. I have great interest in web programming and game development
        </div>
      </div>
      <Sidebar></Sidebar>
    </>
  );
}

export default Landing
