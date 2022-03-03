import React from 'react';
import './App.css';
import Landing from '../src/components/landing';
import Sidebar from '../src/components/sidebar-logos';
import About from '../src/components/about';
import Experience from './components/experience';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Landing>
          <Sidebar></Sidebar>
        </Landing>
        <About>

        </About>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
