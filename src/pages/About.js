import React from 'react';

export default function About() {
    return (
        <div id="about">
            <div id="bio-container">
                <h2 className="page-title">Bio</h2>
                <p>From a childhood of playing video games, to developing them in highschoool, and now creating full stack applications, you could say I'm an avid lover of technology.
                    I moved to the New Orleans area from Luling, a small town 30 minutes outside of New Orleans, with a hope for constructing a future for myself that I would enjoy.
                    I studied JavaScript and Unity game development while working in an oil refinery, and eventually left to start a career as a Software Developer.
                    In 2019, I attended Operation Spark in New Orleans where I developed a solid foundation of JavaScript,
                     and now work as a Full Stack Developer.
                </p>
            </div>
            <div id="job-container">
                <div className="job">
                    <h3>Front-End</h3>
                    <ul className="skills">
                    <li className="skills-item">JavaScript</li>
                    <li className="skills-item">HTML / CSS / Sass</li>
                    <li className="skills-item">React / React Native</li>
                    <li className="skills-item">AngularJS</li>
                    <li className="skills-item">JQuery</li>
                    </ul>
                </div>

                <div className="job">
                    <h3>Back-End</h3>
                    <ul className="skills">
                    <li className="skills-item">Node</li>
                    <li className="skills-item">ExpressJS</li>
                    <li className="skills-item">SQL - MYSQL / PostGreSQL</li>
                    <li className="skills-item">NoSQL - MongoDB</li>
                    <li className="skills-item">PHP</li>
                    </ul>
                </div>

                <div className="job">
                    <h3>Extras</h3>
                    <ul className="skills">
                    <li className="skills-item">Git</li>
                    <li className="skills-item">Agile</li>
                    <li className="skills-item">Linux</li>
                    <li className="skills-item">WordPress</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}