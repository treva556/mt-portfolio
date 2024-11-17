


//////App code 
import React from 'react';
import '../App.css'; 
import Carousel from '../components/swapper';


function Blogs() {
  return (
    <>
    <div className=' bg-yellow-400 p-10 font-bold font-mono text-4xl'>
  "Blogs Coming Soon"
    </div>
    <section class="bg-yellow-400 text-black py-8 min-h-screen">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    {/* <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2> */}
    <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline"> How machines Read code </summary>
        <div class="px-4 pb-4">
          <p>.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Exploring the Future of Quantum Computing </summary>
        <div class="px-4 pb-4">
          <p>What is quantum computing? Well...</p>
        </div>
      </details>
    
     
    
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline"> Essential Soft Skills for Computer Scientists: Beyond Coding</summary>
        <div class="px-4 pb-4">
          <p>If you have any questions, concerns, or need assistance, you can reach our customer support team at 9911083755 during our business hours, Monday to Saturday from 10 am to 6 pm. You can also contact us via email at <a href="" class="underline">example@gmail.com</a>.</p>
        </div>
      </details>

      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline"> Most common Data Structures </summary>
        <div class="px-4 pb-4">
          <p>If you have any questions, concerns, or need assistance, you can reach our customer support team at 9911083755 during our business hours, Monday to Saturday from 10 am to 6 pm. You can also contact us via email at <a href="" class="underline">example@gmail.com</a>.</p>
        </div>
      </details>

      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline"> My Top Recommendations Books for computer scientists & System Programmers</summary>
        <div class="px-4 pb-4">
          <ul>
            <li> But how do it know by   </li>
            <li> Modern Operating Systems  </li>
            <li> Computer Systems: a programmers perspective 🥇 </li>
            <li> Algorith Design Manual </li>
            <li> Programming from Ground Up </li>
            <li> Cracking the Coding Intervies </li>
          </ul>
        </div>
      </details>

      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline"> How Networking Works </summary>
        <div class="px-4 pb-4">
          <p>If you have any questions, concerns, or need assistance,.</p>
        </div>
      </details>
   
    </div>
  </div>
</section>
    </>
  );
}

export default Blogs;

