
//////App code 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css'; // Assuming you have Tailwind configured here
import Services from './pages/services';
import Body from './pages/home'; // Home component
import Nav from './components/navbar';
import Footer from './components/footer';
// import About from './sections/About'; // About component
// import Contacts from './sections/Contacts'; // Contacts component

function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav/>
        {/* <nav className='bg-red-800 fixed w-full z-10 flex md:flex md:flex-grow flex-row justify-end space-x-1'>
          <NavLink to="/" className={({ isActive }) => isActive ? "py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            About Us
          </NavLink>
          <NavLink to="/contacts" className={({ isActive }) => isActive ? "py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Contacts
          </NavLink>
        </nav> */}

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
        <Footer />
      </div>
      
    </Router>
    
  );
}

export default App;


////



















// import React from 'react';
// import './App.css';
// import Nav from './components/navbar';
// import image11 from './assets/image11.jpeg';

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <div className="bg-white min-h-screen">
//         <div className="flex items-center justify-center space-x-2 my-20">
//           <div>
//             <h1 className="text-5xl">Innovating excellence</h1>
//           </div>
//           <div>
//             <img src={image11} alt="Description of Image 11" className="w-full" />
//           </div>
//         </div>
//         <div className='bg-blue-950'>
//         <div className='border border-white p-4 mt-4 flex flex-col justify-start h-64'>
//             <h4 className='text-white text-2xl'>About me</h4>
//           </div> 
//           <div className='border border-white p-4 mt-4 flex flex-col justify-start h-64'>
//             <h4 className='text-white text-2xl'>Services</h4>
//           </div> 
//           <p className=' text-white mt-9 mb-9 text-xl'>We Build the world we want</p>
//           <div className='border border-white p-4 mt-4 flex flex-col justify-start h-64'>
//             <h4 className='text-white text-2xl'>Previous Projects</h4>
//           </div> 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
