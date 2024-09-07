import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Home/Navbar';
import ShuffleHero from './Components/Home/ShuffleHero';
import MarqueeBg from './Components/Home/MarqueeBg';
import { ParallaxHero } from './Components/Home/ParallaxHero';
import Testimonial from './Components/Home/Testimonial';
import Footer from './Components/Home/Footer';
import Signin from './Components/Home/Signin';
import Signup from './Components/Home/Signup';
import PricingCard from './Components/Pages/PricingCard'
import Pricing from './Components/Pages/Pricing';
import DSidebar from './Components/Dashboard/DSidebar'
import Auth from './Components/Home/Auth';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar scroll='true' />
              <MarqueeBg />
              <ShuffleHero />
              <ParallaxHero />
              <Testimonial />
              <PricingCard/>
              <Footer />
            </>
          }
          />

        {/* Signin Route */}
        <Route path="/signin" element={<Auth />} />

        {/* Signup Route */}
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </Router>
  </>
  );
}

// const App = () => {
//   return (
//     <>
//       {/* <Pricing/> */}
//       {/* <DSidebar /> */}
//     </>
//   );
// }

export default App;
