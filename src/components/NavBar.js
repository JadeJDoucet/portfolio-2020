import React from 'react';

export default function NavBar({ setNavPage, currPage }) {
// May need to grab elements and change classes 'next, active, and previous'
    return (
        <div id="nav-bar">
            <ul id="nav-list">
                <li className="nav-item" onClick={() => setNavPage(0)}>Home</li>              
                <li className="nav-item" onClick={() => setNavPage(1)}>Projects</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Blog</li>
            </ul>
        </div>
    );
}