import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
// Swiper
import { Swiper, SwiperSlide }  from 'swiper/react';
import SwiperCore, { EffectCube, Navigation, Pagination} from 'swiper';
SwiperCore.use([EffectCube, Navigation, Pagination]);

function App() {

  var cubeEffect = {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }; 
  return (
    <Swiper
      effect='cube'
      grabCursor={true}
      pagination={{ clickable: true }}
    >
      {}
        <Home className="swiper-slide" />
        <Projects className="swiper-slide" />
        <About className="swiper-slide" />
        <Blogs className="swiper-slide" />

    </Swiper>
  );
}
// Add page for projects - maybe use github API
// Add page for blogs - use dev.to API

export default App;
