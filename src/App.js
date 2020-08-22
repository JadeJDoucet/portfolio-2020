import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

function App() {
  return (
    <div className="App-container swiper-container">
      <div className="swiper-wrapper">
        <Home className="swiper-slide" />
        <Projects className="swiper-slide" />
        <About className="swiper-slide" />
        <Blogs className="swiper-slide" />
      </div>
    </div>
  );
}
// Add page for projects - maybe use github API
// Add page for blogs - use dev.to API

export default App;
