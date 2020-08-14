import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>Jade Doucet</h2>
          <h4>Software Engineer, Web Developer</h4>
        </div>
        <FontAwesomeIcon icon={["fab", "github"]} />
        <div className="icons-row">
        <a href="https://linkedin.com/in/jadejdoucet">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/JadeJDoucet">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://dev.to/jadejdoucet">
          <i className="fab fa-dev fa-2x"></i>
        </a>
      </div>
      </header>
    </div>
  );
}

export default App;
