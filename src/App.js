import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';

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
// Add page for projects - maybe use github API
// Add page for blogs - use dev.to API

export default App;
