

///
import React from 'react';
import '../App.css'; // Assuming you have Tailwind configured here
import paradise from '../assets/paradise.jpeg';

import FS from '../assets/FS.jpeg';
import WLS from '../assets/wls.jpeg';
import image56 from '../assets/yy.jpeg';
import Blog from '../assets/blog.jpeg';


function Projects() {
  return (
    <>
  
    <div className=' pb-3 bg-gray-800 '>

   
    {/* <div className=' bg-yellow-400 p-24 font-bold font-mono text-4xl'>
  "More Projects soon"
    </div> */}
  <div>
  <ul className="list-disc bg-black list-inside text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  custom-bullets">
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
                className=" bg-yellow-400 rounded-2xl p-4 text-black block"
              >
            <img src={image56} alt="Technology 2" className="w-1/8 mb-4" />
            A cyber security website project
              </a>
            </li>
            <li>
            <a 
                href="https://flight-school-rose.vercel.app/" 
                
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-400 rounded-2xl p-4 text-black block"
              >
            <img src={FS} alt="Technology 2" className="w-1/8 mb-4" />
            A Flight School Web project
              </a>
            </li>

            <li>
            <a 
                href="https://logistics-app-six.vercel.app/" 
                
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-400 rounded-2xl p-4 text-black block"
              >
            <img src={WLS} alt="Technology 2" className="w-1/8 mb-4" />
            A Logistics company website
              </a>
            </li>
           
            <li>
              <a 
                href="https://farmwise.co.ke/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-400 p-4 text-black underline rounded-2xl block"
              >
                Farmwise
              </a>
            </li>
            <li>
            <a 
                href="https://paradise-club.vercel.app/" 
                
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-400 rounded-2xl p-4 text-black block"
              >
            <img src={paradise} alt="Technology 2" className="w-1/8 mb-4" />
            Paradise Cocktails
              </a>
            </li>
          
            <li>
            <a 
                href="https://posts-2-git-main-treva556s-projects.vercel.app/" 
                
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-400 rounded-2xl p-4 text-black block"
              >
            <img src={Blog} alt="Technology 2" className="w-1/8 mb-4" />
            Full Stack Blog App
              </a>
            </li>
           
            <li>
              <a 
                href="https://farmwise.co.ke/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-400 p-4 text-black underline rounded-2xl block"
              >
                Jewelry Shop
              </a>
            </li>
            <li>
            <a 
                href="https://paradise-club.vercel.app/" 
                
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-yellow-400 rounded-2xl p-4 text-black block"
              >
            {/* <img src={paradise} alt="Technology 2" className="w-1/8 mb-4" /> */}
            Wise Ren.Energy
              </a>
            </li>

          </ul>

     </div>
  </div> 
    </>
  );
}

export default Projects;

