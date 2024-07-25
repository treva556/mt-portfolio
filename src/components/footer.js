

/////

import React from 'react';
import im990 from '../assets/Group 90.png'
import im991 from '../assets/Group 91.png'

function Footer () {
  return (
    <div className="font-mono p-10 bg-black text-yellow-300">
    <p className='font-bold text-2xl underline'> Connect With Me </p>
    <div className='mt-3'>
      <p>Phone: 0795156256</p>
      <p>Email: marktreva92@gmail.com</p>
      <div className="flex justify-center items-center">
      <a 
            href=" https://github.com/treva556  " // Replace with your Github profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
        <p className="mr-2">Github:</p>
        <img src={im991} alt="Github Logo" className="h-5" />
        </a>
      </div>
      <div className="flex justify-center items-center mt-2">
      <a 
            href="https://github.com/your-profile" // Replace with your Github profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
        <p className="mr-2">Instagram:</p>
        <img src={im990} alt="Instagram Logo" className="h-7" />
        </a>
      </div>
    </div>
  </div>
  );
}

export default Footer;

