

import React from 'react';
import '../App.css';
import image11 from '../assets/image11.jpeg';
// import Nav from '../components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ProgressBar from '../components/progress';
import Roadmap from '../components/roadmap';

AOS.init();

function Body() {
  return (
    <div className=" bg-yellow-400">
      {/* <Nav /> */}
      <header className="text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl text-black font-bold">Designing Digital Experiences</h1>
          <p className="mt-4 text-black text-lg">
            Creating visually appealing, intuitive, and interactive websites that provide exceptional user experiences.
          </p>
        </div>
      </header>
      <section className="mb-1 ml-4 mr-4 rounded-3xl color2 py-20">
      <div class="about-me-sectionp-8">
    <h2 class="text-center text-3xl font-bold mb-6">About Me</h2>
    <p class="text-lg mb-4">Hello, I'm a Front-end Developer with a passion for creating interactive and dynamic web applications. With over 5 years of experience in the industry, I have developed a deep understanding of modern web technologies and design principles.</p>

    <h3 class="text-2xl font-semibold mb-2">Skills</h3>
    <ul class="list-disc pl-5 mb-4">
        <li>HTML, CSS, JavaScript, React, Ruby on Rails</li>
        <li>UI/UX Design, Responsive Web Design</li>
    </ul>
    <h3 class="text-2xl font-semibold mb-2">Achievements</h3>
    <ul class="list-disc pl-5 mb-4">
        <li> Applied Computing Degree Student</li>
        <li>Certified in Full Stack Development</li>
    </ul>
    <h3 class="text-2xl font-semibold mb-2">Personal Interests</h3>
    <p class="mb-4">In my free time, I enjoy Tennis, hiking, and experimenting with new web technologies.</p>
</div>
      </section>
      <ProgressBar progress={40} />
      <Roadmap />

      <div data-aos="fade-down">
      <div class="process-section  p-8">
    <h2 class="text-center text-3xl font-bold mb-6">Process</h2>
    <div class="relative">
        <div class="vertical-navigation absolute top-0 right-0 flex flex-col items-center">
            <a href="#step1" class="mb-4"><span class="dot"></span></a>
            <a href="#step2" class="mb-4"><span class="dot"></span></a>
            <a href="#step3" class="mb-4"><span class="dot"></span></a>
        </div>
        <div id="step1" class="step-content mb-6">
            <h3 class="text-2xl font-semibold mb-2">Step 1: Initial Consultation</h3>
            <p>Discussing your project requirements and goals.</p>
        </div>
        <div id="step2" class="step-content mb-6">
            <h3 class="text-2xl font-semibold mb-2">Step 2: Planning and Design</h3>
            <p>Creating a detailed plan and design mockups for your project.</p>
        </div>
        <div id="step3" class="step-content mb-6">
            <h3 class="text-2xl font-semibold mb-2">Step 3: Development and Launch</h3>
            <p>Developing your project and launch it successfully.</p>
        </div>
    </div>
</div>
</div>

      <div className='bg-black p-6'>
        <div 
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2 className="text-white font-bold mb-8">Previous Projects</h2>
          <ul className="list-disc list-inside text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <li>
              <a 
                href="https://wise-properties.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-red-800 rounded-2xl p-4 text-black underline block"
              >
                Wise Properties
              </a>
            </li>
            <li>
              <a 
                href="https://wise-security.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-4 text-black underline rounded-2xl block"
              >
                Wise Security
              </a>
            </li>
            <li>
              <a 
                href="https://farmwise.co.ke/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-4 text-black underline rounded-2xl block"
              >
                Farmwise
              </a>
            </li>
            <li>
              <a 
                href="https://paradise-club.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-4 text-black underline rounded-2xl block"
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

      <section className="ml-4 mr-4 rounded-2xl color1py-20">
      <div class="services-section bg-gray-100 rounded-2xl p-8">
    <h2 class="text-center text-3xl font-bold mb-6">Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <div class="service-item bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Git Version Control</h3>
            <p>Manage and track changes in your projects efficiently using Git.</p>
        </div>
        <div class="service-item bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">App Design</h3>
            <p>Create intuitive and user-friendly app interfaces.</p>
        </div> */}
        <div class="service-item bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Back-end Development</h3>
            <p>Develop robust server-side applications and APIs.</p>
        </div>
        <div class="service-item bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Web Development</h3>
            <p>Build responsive and modern websites with the latest technologies.</p>
        </div>
        <div class="service-item bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Photography</h3>
            <p>Professional photography services for various needs.</p>
        </div>
        <div class="service-item bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Freelancing</h3>
            <p>Offering flexible freelancing services for diverse projects.</p>
        </div>
    </div>
</div>
      </section>

      <div data-aos="fade-down">
        <div className="py-20">
          <h6 className="text-2xl font-bold mb-2">Hobbies</h6>
          <ul className="list-disc list-inside">
            <li>Tennis</li>
            <li>Football</li>
            <li>Swimming & Painting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;

////




