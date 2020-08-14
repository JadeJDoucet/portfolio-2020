import React from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);

// Move most of this stuff to it's own page, each page of the parallax scrolling to be it's own component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>Jade Doucet</h2>
          <h4>Software Engineer, Web Developer</h4>
        </div>
        
        <div className="icons-row">
          <a href="https://linkedin.com/in/jadejdoucet">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a href="https://github.com/JadeJDoucet">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="https://dev.to/jadejdoucet">
          < FontAwesomeIcon icon={['fab', 'dev']} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
