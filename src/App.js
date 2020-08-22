import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
// Swiper
import { Swiper, SwiperSlide }  from 'swiper/react';
import SwiperCore, { EffectCube, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
SwiperCore.use([EffectCube, Navigation, Pagination]);


function App() {
  const pages = [<Home className="swiper-slide" />,
  <Projects className="swiper-slide" />,
  <About className="swiper-slide" />,
  <Blogs className="swiper-slide" />];

  return (
    <Swiper
      direction='vertical'
      effect='cube'
      grabCursor={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      loop={true}
      parallax={true}
    >
      {pages.map((page, i) => {
        return <SwiperSlide key={`slide=${i}`}>{page}</SwiperSlide>;
      })}
        

    </Swiper>
  );
}
// Add page for projects - maybe use github API
// Add page for blogs - use dev.to API

export default App;
