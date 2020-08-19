import React from 'react';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App-container">
      <Home />
      <About />
      <Projects />
    </div>
  );
}
// Add page for projects - maybe use github API
// Add page for blogs - use dev.to API

export default App;
