import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';

// Move most of this stuff to it's own page, each page of the parallax scrolling to be it's own component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
      </header>
    </div>
  );
}

export default App;
