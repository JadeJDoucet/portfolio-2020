import React from 'react';

export default function About() {
    return (
        <div id="about-container">
            <h2>Bio:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sagittis nisl in odio imperdiet, pharetra malesuada ex accumsan.
                Integer urna nulla, varius et ornare in, tincidunt non justo.
                Quisque et orci vel lorem luctus vestibulum. Vivamus sed est sit amet metus commodo condimentum eu eget arcu.
                Donec eget enim eget elit venenatis volutpat non iaculis dolor. Praesent pharetra in tortor porttitor molestie.
                In vitae mi ac ex scelerisque pretium. Mauris vehicula tortor ac pretium tristique. In fringilla urna sed tempus tincidunt.
                Vestibulum vel enim ullamcorper, lacinia ex non, maximus mi. Quisque vel metus a metus rhoncus vehicula.
                Integer sagittis nunc mi, a commodo tellus finibus ac.
            </p>
            <div id="job-container">
                <div className="job">
                    <h3>Front-End</h3>
                    <ul className="skills">
                    <li className="skills-item">JavaScript</li>
                    <li className="skills-item">HTML / CSS</li>
                    <li className="skills-item">React / React Native</li>
                    <li className="skills-item">Sass</li>
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
                    </ul>
                </div>

                <div className="job">
                    <h3>Extras</h3>
                    <ul className="skills">
                    <li className="skills-item">Git</li>
                    <li className="skills-item">Agile</li>
                    <li className="skills-item">Linux</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}