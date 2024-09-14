

import React, { useState } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Swapper from '../components/swapper';

import ReactTypingEffect from 'react-typing-effect';
import ProgressBar from '../components/progress';
import Roadmap from '../components/roadmap';
import Pricing from './pricing';
import image1 from '../assets/html.png';
import image2 from '../assets/js.png';
import image3 from '../assets/rails.png';
import image4 from '../assets/react.png';
import paradise from '../assets/paradise.jpeg';
import image85 from '../assets/Group 85.png';
import image55 from '../assets/yj.jpeg';

import WLS from '../assets/wls.jpeg';

import Blog from '../assets/blog.jpeg';
import Mongo from '../assets/mongo.png';

import Figma from '../assets/figma.png';
import Next from '../assets/nextjs.svg';
import { Link } from 'react-router-dom';

AOS.init();

function Body() {
  const [isMultimediaOpen, setIsMultimediaOpen] = useState(false);

  const toggleMultimediaDropdown = () => {
    setIsMultimediaOpen(!isMultimediaOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-yellow-400" style={{ position: 'relative', zIndex: 10 }}>
      <div className=' text-yellow-400 p-6'>
        jj
      </div>
      <header className="text-white py-3">
        <div className="container mx-auto text-center">
          <div className=' text-black text-lg font-mono typing-effect-container flex justify-start ml-5'>
        <ReactTypingEffect
              text={[
                'Hi, im Mark Trevor. '
              ]}
              speed={20}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
            </div>
          <h1 className="text-5xl text-black font-bold mt-5">I Design Digital Experiences</h1>
          <div className="mt-10 text-black text-lg font-mono typing-effect-container" style={{ display: 'inline-block', width: '100%' }}>
                
                <p> Creating visually appealing, intuitive, and interactive websites that provide exceptional user experiences. </p>
           
          </div>
        </div>
      </header>
   
      <section className="grid grid-cols-1 lg:grid-cols-2 mb-4 ml-4 mr-4 rounded-3xl py-2">
  <div className="flex items-center justify-center p-1">
    <img 
      src={image85} 
      alt="Technology 4" 
      className="w-full lg:w-3/4 max-w-md mb-2 lg:mb-0" 
    />
  </div>
  <div className="p-2 lg:pr-10 lg:mt-36 lg:ml-2">
    <h2 className="text-center text-3xl font-bold mb-6">About Me</h2>
    <p className="text-lg mb-4">
      I am a Full Stack Web Developer with a passion for creating interactive and dynamic web applications.
      With over 3 years of experience in the industry,I have developed a deep understanding of modern web technologies and design principles.
    </p>
    <h4 className=' font-bold'> I believe in being a lifelong student, always ready to expand my mind</h4>
  </div>
</section>

      <div className=''>
              <h3 className="text-2xl font-semibold mb-2 mt-5">Technologies</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>HTML, CSS, Tailwind,  JavaScript, React, Ruby on Rails</li>
                <li>UI/UX Design, Next Js</li>
              </ul>
              <div className="flex justify-center  flex-wrap space-x-4">
                
                <img src={Figma} alt="Technology 4" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />
                <img src={image1} alt="Technology 1" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />
                <img src={image2} alt="Technology 2" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />
                <img src={image3} alt="Technology 3" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />
                <img src={image4} alt="Technology 4" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />,
                <img src={Next} alt="Technology 5" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />
                <img src={Mongo} alt="Technology 6" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />


              </div>
            </div>
            
      {/* <ProgressBar progress={40} /> */}
      <Roadmap />
      <h3 className="text-2xl font-semibold mb-2 mt-6" >Personal Interests</h3>
      <p className="mb-16">In my free time, I enjoy tennis, gaming and experimenting with new web technologies.</p>
     
 
      <div className=" bg-black lg:ml-60 lg:mr-60  font-mono font-bold p-10" style={{ position: 'relative', zIndex: 10 }} >
        <div 
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2 className="text-yellow-300 font-bold text-3xl mb-8">  showcase</h2>
         <Swapper/>
         {/* <h3 className=' text-white'>  --- Swipe----</h3> */}
        </div>
        <Link to="/projects" className=' text-white underline rounded-2xl block mt-4'>show more</Link>

      </div>

      <div className="w-full mt-10">
  <h4 className="ml-4 mt-5 text-2xl font-bold "></h4>
  <div className="bg- p-8 rounded-xl shadow-lg mx-4">
    <h2 className="text-center text-3xl font-bold mb-6">Web Development Pricing</h2>
    <p className="text-lg text-center">My web development services range from <strong>$500 to $2000</strong>, depending on the complexity of the project.</p>
    <div className=' mt-6'>
    <Link to="/pricing" className=' bg-yellow-400 p-4 text-black underline rounded-2xl block'>Learn more</Link>

   
    </div>
    

  </div>
</div>



<section className="ml-4 mr-4 rounded-2xl py-6">
  <div className="services-section rounded-2xl p-8">
    <h2 className="text-center text-3xl font-bold mb-6">Complementary Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="service-item bg-black text-yellow-300 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Cyber-security</h3>
        <p>Systems security enthusist.</p>
      </div>
      <div className="service-item bg-black text-yellow-300 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Political Science</h3>
        <p>Understanding and analyzing world policies and governance.</p>
      </div>
      <div className="service-item bg-black text-yellow-300 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Multi-Media</h3>
        <p>Creating engaging content through video production, graphic design, and animation.</p>
        <button 
          className="mt-2 text-white underline" 
          onClick={toggleMultimediaDropdown}
        >
          {isMultimediaOpen ? 'Show Less' : 'Show More'}
        </button>
        {isMultimediaOpen && (
          <div className="mt-2">
            <p>Additional information about multimedia services:</p>
            <ul className="list-disc list-inside">
              <li>Video production</li>
              {/* <li>Graphic design</li>
              <li>Animation services</li> */}
              <li>Photography</li>
            </ul>
          </div>
        )}
      </div>
      {/* <div class="service-item  p-4 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-2">Freelancing</h3>
        <p>Offering flexible freelancing services for diverse projects.</p>
      </div> */}
    </div>
  </div>
</section>

<div className=' border border-black p-6 mr-5 ml-5'>
<p className=' font-bold text-xl'> " The best way to predict the future is to create it. "</p>
</div>

       <div className="back-to-top-button-container text-center py-4 mt-4">
        <button 
          className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full border border-black"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default Body;

////




