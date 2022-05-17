import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Landing from '../src/components/landing';
import Sidebar from '../src/components/sidebar-logos';
import About from '../src/components/about';
import Experience from './components/experience';
import Work from './components/work';
import Design from './components/design';

function App() {
  return (
    <><div className="App">
      <div id="content">
        <Landing>
          <Sidebar></Sidebar>
        </Landing>
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
