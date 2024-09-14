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
import Dasbboard from './Components/Dashboard/Dashboard';

// const App = () => {
//   return (
//     <>
//     <Router>
//       <Routes>
//         {/* Home Route */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar scroll='true' />
//               <MarqueeBg />
//               <ShuffleHero />
//               <ParallaxHero />
//               <Testimonial />
//               <PricingCard/>
//               <Footer />
//             </>
//           }
//           />

//         {/* Signin Route */}
//         <Route path="/signin" element={<Auth />} />

//         {/* Signup Route */}
//         <Route path="/signup" element={<Auth />} />
//       </Routes>
//     </Router>
//   </>
//   );
// }
import Profile from './Components/Home/Profile';
import Question from './Components/Home/Question';
import FAQ from './Components/Home/FAQ';
import Contact from './Components/Home/Contact';
import Privacy_Policy from './Components/Home/Privacy_Policy';
import Terms_Condition from './Components/Home/Terms_Condition';
import Pricing from './Components/Pages/Pricing';
import PricingCard from './Components/Pages/PricingCard'
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
              <Profile/>
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
        <Route path="/signin" element={<Signin />} />

        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
        <Route path="/Terms_Condition" element={<Terms_Condition />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<Pricing />} />



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
//       <Dasbboard/>
//     </>
//   );
// }

export default App;
