import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import NavBar from './components/NavBar';
// Swiper
import { Swiper, SwiperSlide }  from 'swiper/react';
import SwiperCore, { EffectCube, Mousewheel, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
SwiperCore.use([EffectCube, Mousewheel, Pagination ]);


function App() {
  const [currPage, setCurrPage] = useState(0);
  // currPage will tell the nav bar which item is to be highlighted, pages will setCurrPage when in view
  // Will ned to use the prop 'isActive' with Swiper slides to handle navigation
  //https://swiperjs.com/react/#swiperslide-props

  const pages = [<Home setPageHome={setCurrPage} pageIndex={0}/>,
  <Projects setPageProjects={setCurrPage} pageIndex={1}/>,
  <About setPageAbout={setCurrPage} pageIndex={2}/>,
  <Blogs setPageBlogs={setCurrPage} pageIndex={3}/>]; 

// maybe add virtual, mousewheel isnt working for this
  return (
    <div> 
      <NavBar setNavPage={setCurrPage} currPage={currPage}/>
      <Swiper
        direction='vertical'
        effect='cube'
        grabCursor={true}
        loop={true}
        mousewheel={true}
        pagination
      >
        {pages.map((page, i) => {
          if (i === currPage) { // use index to track which page is active, setCurrPage should cause re-render
            return <SwiperSlide key={`slide=${i}`} tag="li" isActive={true}>{page}</SwiperSlide>
          } else {
            return <SwiperSlide key={`slide=${i}`} tag="li">{page}</SwiperSlide>;
          }
        })}
      </Swiper>
    </div>
  );
}
// Add page for projects - maybe use github API
// Add page for blogs - use dev.to API

export default App;
