


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
          <p>You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.</p>
        </div>
      </details>
      <details>
        <summary class="py-2 outline-none cursor-pointer focus:underline">Exploring the Future of Quantum Computing </summary>
        <div class="px-4 pb-4">
          <p>We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.</p>
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
   
    </div>
  </div>
</section>
    </>
  );
}

export default Blogs;

