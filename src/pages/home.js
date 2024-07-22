

import React, { useState, useEffect } from 'react';
import '../App.css';
// import Nav from '../components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ReactTypingEffect from 'react-typing-effect';
import ProgressBar from '../components/progress';
import Roadmap from '../components/roadmap';
import image1 from '../assets/html.png';
import image2 from '../assets/js.png';
import image3 from '../assets/rails.png';
import image4 from '../assets/react.png';

AOS.init();

function Body() {
  const [isMultimediaOpen, setIsMultimediaOpen] = useState(false);

  const toggleMultimediaDropdown = () => {
    setIsMultimediaOpen(!isMultimediaOpen);
  };

  return (
    <div className="bg-yellow-400">
      {/* <Nav /> */}
      <header className="text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl text-black font-bold mt-5">Designing Digital Experiences</h1>
          <div className="mt-4 text-black text-lg font-mono typing-effect-container" style={{ display: 'inline-block', width: '100%' }}>
            <ReactTypingEffect
              text={[
                'Creating visually appealing, intuitive, and interactive websites that provide exceptional user experiences.'
              ]}
              speed={20}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </div>
        </div>
      </header>
      <section className="mb-1 ml-4 mr-4 rounded-3xl py-20">
        <div className="about-me-section p-8">
          <h2 className="text-center text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">Hello, I'm a Web Developer with a passion for creating interactive and dynamic web applications. 
            With over 3 years of experience in the industry, 
            I have developed a deep understanding of modern web technologies and design principles.</p>

          <div>
            <h3 className="text-2xl font-semibold mb-2 mt-5">Technologies</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>HTML, CSS, JavaScript, React, Ruby on Rails</li>
              <li>UI/UX Design, Responsive Web Design</li>
            </ul>
            <div className="flex justify-center flex-wrap space-x-4">
              <img src={image1} alt="Technology 1" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />
              <img src={image2} alt="Technology 2" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />
              <img src={image3} alt="Technology 3" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />
              <img src={image4} alt="Technology 4" className="w-1/8 mb-4" style={{ maxWidth: '50px' }} />
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-2 mt-6" >Personal Interests</h3>
          <p className="mb-2">In my free time, I enjoy Tennis, hiking, and experimenting with new web technologies.</p>
        </div>
      </section>
      {/* <ProgressBar progress={40} /> */}
      <Roadmap />

      <div data-aos="fade-down">
        <div className="process-section p-8">
          <h2 className="text-center text-3xl font-bold mb-6">Process</h2>
          <div className="relative">
            <div className="vertical-navigation absolute top-0 right-0 flex flex-col items-center">
              <a href="#step1" className="mb-4"><span className="dot"></span></a>
              <a href="#step2" className="mb-4"><span className="dot"></span></a>
              <a href="#step3" className="mb-4"><span className="dot"></span></a>
            </div>
            <div id="step1" className="step-content mb-6">
              <h3 className="text-2xl font-semibold mb-2">Step 1: Initial Consultation</h3>
              <p>Discussing your project requirements and goals.</p>
            </div>
            <div id="step2" className="step-content mb-6">
              <h3 className="text-2xl font-semibold mb-2">Step 2: Planning and Design</h3>
              <p>Creating a detailed plan and design mockups for your project.</p>
            </div>
            <div id="step3" className="step-content mb-6">
              <h3 className="text-2xl font-semibold mb-2">Step 3: Development and Launch</h3>
              <p>Developing your project and launch it successfully.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black p-6 font-mono font-bold">
        <div 
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2 className="text-white font-bold mb-8">Previous Projects</h2>
          <ul className="list-disc list-inside text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 custom-bullets">
            <li>
              <a 
                href="https://wise-properties.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-400 rounded-2xl p-4 text-black underline block"
              >
                Wise Properties
              </a>
            </li>
            <li>
              <a 
                href="https://wise-security.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-500 p-4 text-black underline rounded-2xl block"
              >
                Wise Security
              </a>
            </li>
            <li>
              <a 
                href="https://farmwise.co.ke/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-500 p-4 text-black underline rounded-2xl block"
              >
                Farmwise
              </a>
            </li>
            <li>
              <a 
                href="https://paradise-club.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-500 p-4 text-black underline rounded-2xl block"
              >
                Paradise Bar Lounge
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <h4 className="ml-4 mt-5 text-2xl font-bold mb-4 p-9">Pricing</h4>
        {/* Pricing content goes here */}
      </div>

      <section className="ml-4 mr-4 rounded-2xl py-6">
        <div className="services-section rounded-2xl p-8">
          <h2 className="text-center text-3xl font-bold mb-6">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="service-item bg-black text-yellow-300 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Cyber-security</h3>
              <p>Develop robust server-side applications and APIs.</p>
            </div>
            <div className="service-item bg-black text-yellow-300 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Political Science</h3>
              <p>Build responsive and modern websites with the latest technologies.</p>
            </div>
            <div className="service-item bg-black text-yellow-300 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Multi-Media</h3>
              <p>Professional photography services for various needs.</p>
              <button 
                className="mt-2 text-blue-500 underline" 
                onClick={toggleMultimediaDropdown}
              >
                {isMultimediaOpen ? 'Show Less' : 'Show More'}
              </button>
              {isMultimediaOpen && (
                <div className="mt-2">
                  <p>Additional information about multimedia services.</p>
                  <ul className="list-disc list-inside">
                    <li>Video production</li>
                    <li>Graphic design</li>
                    <li>Animation services</li>
                  </ul>
                </div>
              )}
            </div>
        <div class="service-item  p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Freelancing</h3>
            <p>Offering flexible freelancing services for diverse projects.</p>
        </div>
    </div>
</div>
      </section>

      {/* <div data-aos="fade-down">
        <div className="py-20">
          <h6 className="text-2xl font-bold mb-2">Hobbies</h6>
          <ul className="list-disc list-inside">
            <li>Tennis</li>
            <li>Football</li>
            <li>Swimming & Painting</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Body;

////




