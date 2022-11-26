import React from 'react';
import './App.css';
import Intro from './components/intro.js';
import Sidebar from '../src/components/sidebar-logos.js';
import About from '../src/components/about.js';
import Experience from './components/experience.js';
import Work from './components/work.js';
import Redesign from './components/redesign';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <div id="content">
        <Intro>
          <Sidebar></Sidebar>
        </Intro>
        <About>
        </About>
        <Experience></Experience>
        <Work></Work>
      </div>
    </div>
    <Routes>
        <Route exact path='/redesign' element={<Redesign/>}/>
    </Routes>
    </>
  );
}

export default App;
