import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import './App.css';
import Navbar from './Components/Home/Navbar';
import ShuffleHero from './Components/Home/ShuffleHero';
import MarqueeBg from './Components/Home/MarqueeBg';
import { ParallaxHero } from './Components/Home/ParallaxHero';
import Testimonial from './Components/Home/Testimonial';
import Footer from './Components/Home/Footer';
import Signin from './Components/Home/Signin';
import Signup from './Components/Home/Signup';
import Privacy_Policy from './Components/Home/Privacy_Policy';
import Terms_Condition from './Components/Home/Terms_Condition';
import FAQ from './Components/Home/FAQ';
import Contact from './Components/Home/Contact';
import Profile from './Components/Home/Profile';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar scroll='true' />
              <Profile/>
              <MarqueeBg />
              <ShuffleHero />
              <ParallaxHero />
              <Testimonial />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<Signin />} />

        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/Privacy_Policy" element={<Privacy_Policy/>} />
        <Route path="/Terms_Condition" element={<Terms_Condition/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/Contact" element={<Contact/>} />


      </Routes>
    </Router>
  );
}

export default App;
