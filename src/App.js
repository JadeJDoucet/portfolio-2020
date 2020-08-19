import React from 'react';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App-container">
      <Home />
      <About />
    </div>
  );
}
// Add page for projects - maybe use github API
// Add page for blogs - use dev.to API

export default App;
