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
            <div className="app-logo"></div>
            <div>
                <h2>Jade Doucet</h2>
                <h4 className="titles">Software Engineer, Web Developer</h4>
            </div>
            <div className="icons-row">
                <a href="https://linkedin.com/in/jadejdoucet" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
                <a href="https://github.com/JadeJDoucet" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
                <a href="https://dev.to/jadejdoucet" target="_blank" rel="noopener noreferrer" >
                < FontAwesomeIcon icon={['fab', 'dev']} />
                </a>
            </div>
            <br />
            <div className="projects-cta" onClick={()=>document.getElementById('nav-1').click()}>
                    <div className="cta-text">See My Work</div>
            </div>
            <div className="arrow" onClick={()=>document.getElementsByClassName("projects-cta")[0].click()}></div>
            <br/><br/><br/>
        </div>
    );
}

export default Home;