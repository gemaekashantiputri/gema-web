import React from 'react';
import './App.css';
import Intro from './components/intro';
import Sidebar from '../src/components/sidebar-logos';
import About from '../src/components/about';
import Experience from './components/experience';
import Work from './components/work';

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
