import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
// Swiper
import { Swiper, SwiperSlide }  from 'swiper/react';
import SwiperCore, { EffectCube, Mousewheel, Pagination, Parallax } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
SwiperCore.use([EffectCube, Mousewheel, Pagination, Parallax ]);


function App() {
  // currPage will tell the nav bar which item is to be highlighted, pages will setCurrPage when in view
  // Will ned to use the prop 'isActive' with Swiper slides to handle navigation
  //https://swiperjs.com/react/#swiperslide-props

  const pages = [<Home />,
  <Projects />,
  <About />,
  <Blogs />]; 

    
    function navIndexToPage(index){
      switch(index) {
        case 0:
          return 'Home';
        case 1: 
          return 'Projects';
        case 2:
          return 'About';
        case 3: 
          return 'Blogs';

        default: return 'Home';
      }
    }
// maybe add virtual, mousewheel isnt working for this
  return (
    <div>
      <Swiper
        direction='vertical'
        effect='cube'
        grabCursor={true}
        loop={true}
        mousewheel={true}
        pagination={{ clickable: true, renderBullet: function (index, className) {
          return `<span class="${className} nav-item">${navIndexToPage(index)}</span>`;
        }}}
        speed={500}
        cubeEffect={{ slideShadows: false }}
        
        freeMode={false}
        freeModeMomentum={true}
        freeModeSticky={false}
      >
        {pages.map((page, i) => {
          return <SwiperSlide key={`slide=${i}`} tag="li">{page}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}
// Add page for projects - maybe use github API
// Add page for blogs - use dev.to API

export default App;
