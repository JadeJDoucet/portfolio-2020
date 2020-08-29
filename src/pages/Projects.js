import React from 'react';
// Maybe use material UI menu

export default function Projects() {
    // Maybe float image right to have text go around it
    // If not, a div with flex-row
    return (
        <div id="projects">
            <a className="project-link" href="https://github.com/Assert-Reconceptualization/ScannAr" target="_blank" rel="noopener noreferrer">
                <div className="project">
                <h2 className="project-title">ScannAR</h2>
                
                </div>
            </a>
            <div className="project">
                <h2 className="project-title">Adopt-A-Pothole</h2>
                
            </div>
            <div className="project">
                <h2 className="project-title">Readr</h2>
                
            </div>

        </div>
    );
}