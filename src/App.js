import React from 'react';
import './App.css';
import Intro from './components/intro.js';
import Sidebar from '../src/components/sidebar-logos.js';
import About from '../src/components/about.js';
import Experience from './components/experience.js';
import Work from './components/work.js';

function App() {
  return (
    <><div className="App">
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
    </>
  );
}

export default App;
