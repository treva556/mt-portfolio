


import paradise from '../assets/paradise.jpeg';
import FS from '../assets/FS.jpeg';
import WLS from '../assets/wls.jpeg';
import Prop from '../assets/prop.jpeg';
import Blog from '../assets/blog.jpeg';

import image56 from '../assets/yy.jpeg';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the default CSS from Swiper
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import { Autoplay, Pagination, Navigation } from 'swiper'; // Import modules individually

const Swapper = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}   

      className="mySwiper"
    >


      <SwiperSlide>
        <a
          href="https://wise-properties.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 rounded-2xl p-4 text-black block"
        >
          <img src={Prop} alt="Real Estate Project" className="w-1/8 mb-4" />
          A Real Estate Project
        </a>
      </SwiperSlide>
      {/* ... other SwiperSlide components ... */}
      <SwiperSlide>
        <a 
          href="https://wise-properties.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-yellow-400 rounded-2xl p-4 text-black block"
        >
          <img src={Prop} alt="Real Estate Project" className="w-1/8 mb-4" />
          A Real Estate Project
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a 
          href="https://wise-security.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-yellow-400 rounded-2xl p-4 text-black block"
        >
          <img src={image56} alt="Cyber Security Project" className="w-1/8 mb-4" />
          A Cyber Security Website Project
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a 
          href="https://flight-school-rose.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-yellow-400 rounded-2xl p-4 text-black block"
        >
          <img src={FS} alt="Flight School Project" className="w-1/8 mb-4" />
          A Flight School Web Project
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a 
          href="https://farmwise.co.ke/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-yellow-400 p-4 text-black underline rounded-2xl block"
        >
          Farmwise
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a 
          href="https://paradise-club.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-yellow-400 rounded-2xl p-4 text-black block"
        >
          <img src={paradise} alt="Paradise Cocktails" className="w-1/8 mb-4" />
          Paradise Cocktails
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a 
          href="https://posts-2-git-main-treva556s-projects.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-yellow-400 rounded-2xl p-4 text-black block"
        >
          <img src={Blog} alt="Full Stack Blog App" className="w-1/8 mb-4" />
          Full Stack Blog App
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a 
          href="https://ngo-five.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-yellow-400 rounded-2xl p-4 text-black block"
        >
          <img src={paradise} alt="NGO" className="w-1/8 mb-4" />
          NGO
        </a>
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Swapper;

