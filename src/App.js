import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
// Swiper
import { Swiper, SwiperSlide }  from 'swiper/react';
import SwiperCore, { EffectCube, Mousewheel } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
SwiperCore.use([EffectCube, Mousewheel]);


function App() {
  const [currPage, setCurrPage] = useState('home');
  // currPage will tell the nav bar which item is to be highlighted, pages will setCurrPage when in view
  const pages = [<Home />,
  <Projects />,
  <About />,
  <Blogs />];

// maybe add virtual, mousewheel isnt working for this
  return (
  
    
    <Swiper
      direction='vertical'
      effect='cube'
      grabCursor={true}
      loop={true}
      mousewheel={true}
    >
      {pages.map((page, i) => {
        return <SwiperSlide key={`slide=${i}`} tag="li">{page}</SwiperSlide>;
      })}
        

    </Swiper>
  );
}
// Add page for projects - maybe use github API
// Add page for blogs - use dev.to API

export default App;
