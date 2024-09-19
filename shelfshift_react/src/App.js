import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
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
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Dashboard/Profile';
import Question from './Components/Home/Question';
import FAQ from './Components/Home/FAQ';
import Contact from './Components/Home/Contact';
import Privacy_Policy from './Components/Home/Privacy_Policy';
import Terms_Condition from './Components/Home/Terms_Condition';
import Items from './Components/Dashboard/Item';
import Inventory_adjustment from './Components/Dashboard/Inventory_adjustment';
import Item_group from './Components/Dashboard/Item_group';
import Item_form from './Components/Dashboard/Item_form';
import Price_List from './Components/Dashboard/Price_List';
import Price_Form from './Components/Dashboard/Price_Form';
import Composite from './Components/Dashboard/Composite';


axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
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
//         <Route path="/dashboard" element={<Dasbboard />} />
//         <Route path="/items" element={<Items />} />
//         <Route path="/Inventory_adjustement" element={<Inventory_adjustment/>} />
//         <Route path="/Item_group" element={<Item_group/>} />
//         <Route path="/Item_form" element={<Item_form/>} />
//         <Route path="/Price_List" element={<Price_List/>} />
//         <Route path="/Price_Form" element={<Price_Form/>} />
//         <Route path="/Composite" element={<Composite/>} />



//       </Routes>
//     </Router>
//   </>
//   )
// }

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>

          <Routes>
            {/* PrivateRoute for Dashboard */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
              exact
            />

            {/* Signin Route */}
            <Route
              path="/signin"
              element={<Signin />}
            />

            {/* Signup Route (assuming this should be different from Signin) */}
            <Route
              path="/signup"
              element={<Auth />}  // You might need to replace this with your actual Signup component
            />

            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  <Navbar scroll="true" />
                  <MarqueeBg />
                  <ShuffleHero />
                  <ParallaxHero />
                  <Testimonial />
                  <PricingCard />
                  <Footer />
                </>
              }
            />
            <Route path="/auth" element={<Auth />} />
            <Route path="/Question" element={<Question />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
            <Route path="/Terms_Condition" element={<Terms_Condition />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/dsidebar" element={<DSidebar />} />
          </Routes>
        </AuthProvider>

      </Router>
    </>
  );
}

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
//               {/* <Profile/> */}
//               <MarqueeBg />
//               <ShuffleHero />
//               <ParallaxHero />
//               <Testimonial />
//               <PricingCard/>
//               <Footer />
//             </>
//           }
//         />

//         {/* Signin Route */}
//         <Route path="/signin" element={<Signin />} />

//         {/* Signup Route */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/Question" element={<Question />} />
//         <Route path="/FAQ" element={<FAQ />} />
//         <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
//         <Route path="/Terms_Condition" element={<Terms_Condition />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Pricing" element={<Pricing />} />



//       </Routes>
//     </Router>
//   </>
//   );
// }


// const App = () => {
//   return (
//     <>
//       {/* <Pricing/> */}
//       {/* <DSidebar /> */}
//       <Dasbboard/>      
//     </>

//   );
// }
//export default App;

export default App;
