import React from 'react';

export default function NavBar({ setCurrPage }) {

    return (
        <div id="nav-bar">
            <ul id="nav-list">
                <li className="nav-item">Home</li>              
                <li className="nav-item">Projects</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Blog</li>
            </ul>
        </div>
    );
}