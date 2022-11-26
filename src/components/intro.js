import React from 'react';
import "../components/intro.css";
import Sidebar from './sidebar-logos';

const Intro = () => {

 return (
  <>
    <div id="nav">
      <a href='#intro'>Home</a>
      <a href='#about'>About</a>
      <a href='#experience'>Experience</a>
      <a href='#work'>Work</a>
    </div>
    <div id="intro">
      <div className="intro-subtitle">Hi, I'm Gema Eka Shanti Putri</div>
      <div className="intro-desc">
        UX Designer passionate about creating innovative designs to make things easier. Apart from having a great interest in the research process, I have the ability to Web and android Development
      </div>
    </div>
      <Sidebar></Sidebar>
      </>
  );
}



export default Intro
