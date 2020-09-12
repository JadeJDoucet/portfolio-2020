import React from 'react';
//import portrait from '../cartoon-portrait-jade.PNG';
//import portrait from '../jade.PNG';
// import portrait from '../darker_portrait.PNG';
// Add FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);

function Home() {
    return (
        <div id="home">
            <h3>I'm under construction, but feel free to look around</h3>
            <div className="app-logo"></div>
            
            <h2>Jade Doucet</h2>
            <h4 className="titles">Software Engineer, Web Developer</h4>

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
                <div className="arrow"></div>
            </div>
            <br/><br/>
        </div>
    );
}

export default Home;