import React from 'react';
import logo from '../logo.svg';
import portrait from '../cartoon-portrait-jade.PNG';
// Add FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);

function Home() {
    return (
        <div id="home">
            <img src={portrait} className="App-logo" alt="logo" />
            <h3>I'm under construction, but feel free to look around</h3>
            
            <h2>Jade Doucet</h2>
            <h4>Software Engineer, Web Developer</h4>

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
            <br/><br/>
            <h1>↓ Scroll ↓</h1>
        </div>
    );
}

export default Home;