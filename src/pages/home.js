

import React from 'react';
import '../App.css';
import image11 from '../assets/image11.jpeg';
// import Nav from '../components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();



function Body() {
  return (
    <div className="bg11">
      {/* <Nav /> */}
      <header className="text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl text-black font-bold"> Designing Digital Experiences</h1>
          <p className="mt-4 text-black text-lg">
          Creating visually appealing, intuitive, and interactive websites that provide exceptional user experiences.
          </p>
          {/* <div className="mt-8 flex justify-center space-x-4">
            <button className=" rounded-2xl bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 ">Join Us Now</button>
            <button className=" rounded-2xl bg-white text-blue-700 hover:text-blue-600 py-2 px-4 ">Get Started</button>
          </div> */}
        </div>
      </header>
      <section className=" mb-1 ml-4 mr-4 rounded-3xl color2 py-20">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-xl font-bold mb-8">Name: Mark Trevor</p>
          <h3 className="text-3xl font-bold mb-8">About Me</h3>

          <div className="flex flex-col items-center w-full">
            <div className="md:w-1/2 mb-8">
              <h4 className="text-2xl font-bold mb-4">Web Development</h4>
              <p className="text-lg mb-4">
                Ecology is the scientific study of the relationships between organisms and their environment, including their physical, chemical.
              </p>
              <ul className="list-disc list-inside">
                <li>Know what your target market wants and needs</li>
                <li>A whole lot of digital love for less</li>
                <li>Problem solving</li>
              </ul>
              <div className="mt-4">
                <span className="block font-bold">Problem Solving: 80%</span>
                <span className="block font-bold">Agronomist: Leslie Alexander</span>
              </div>
            </div>
            
            <div className=" w-screen bg11 mb-8">
              <h4 className="mt-5 text-2xl font-bold mb-4">Process</h4>
              <div className="columns-2 text-2xl">
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">

              1. Design</div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">

              2. coding</div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">

              3. Testing</div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">

              4. Launch</div>
              </div>
            </div>

          
          </div>
        </div>
       
      </section>

      <div className=' bg-black p-6'>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

         <h7 className=" text-white font-bold"> Previous Projects</h7> 
         <ul className="list-disc list-inside text-white">
            <li>
              <a href="https://wise-properties.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-200 underline">
                Wise Properties
              </a>
            </li>
            <li>
              <a href="https://wise-security.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                Wise Security
              </a>
            </li>
            <li>
              <a href="https://farmwise.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                Farmwise
              </a>
            </li>
          </ul>
              </div>
            
        </div>
        <div className="w-full">
              <h4 className="ml-4 mt-5 text-2xl font-bold mb-4 p-9">Pricing</h4>
              {/* Pricing content goes here */}
            </div>
   
      <section className=" ml-4 mr-4 rounded-2xl color1 text-white py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Other Services</h3>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="border border-white p-2 m-4 w-1/3">
              <h4 className="text-2xl font-bold mb-4">Multi-Media</h4>
              <p className=' text-xs'>This allows individuals and organizations to support their efforts to combat carbon climate change.</p>
            </div>
            <div className="border border-white p-4 m-4 w-1/3">
              <h4 className="text-xl font-bold mb-2">Penet-
                ration Tester</h4>
              <p>Energy consulting involves providing expert advice and guidance on energy-related matters.</p>
            </div>
            <div className="border border-white p-4 m-4 w-1/3">
              <h4 className="text-2xl font-bold">Public Relations </h4>
               <h4 className=' text-2xl font-bold mb-2'> Consultation</h4>
              <p>Refers to the adaptation processes of human and natural systems in response to the impacts.</p>
            </div>
          </div>
        </div>
      </section>
      <div data-aos="fade-down">

      <div className="py-20">
        <h6 className="text-2xl font-bold mb-2">Hobbies</h6>
        <ul className="list-disc list-inside">
          <li> Tennis  </li>
          <li> Football </li>
          <li> Swimming & Painting</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Body;

////

