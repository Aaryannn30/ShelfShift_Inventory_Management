// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Marquee from 'react-fast-marquee';
import './App.css';
import Navbar from './Components/Home/Navbar';
import ShuffleHero from './Components/Home/ShuffleHero';
import MarqueeBg from './Components/Home/MarqueeBg';
import { ParallaxHero } from './Components/Home/ParallaxHero';
import Testimonial from './Components/Home/Testimonial';

const App = () => {
  // const [details, setDetails] = useState([]);

  // useEffect(() => {
  //   let data;
  //   axios.get(`http://127.0.0.1:8000/`)
  //     .then(res => {
  //       data = res.data;
  //       setDetails(data);
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })
  // }, []); // Empty dependency array to run only on mount

  // return (
  //   <div className='App bg-slate-600'>
  //     <header>
  //       Django Generated Data:
  //     </header>
  //     <hr />
  //     {details.map((output, id) => (
  //       <div key={id}>
  //         <div>
  //           <h2>
  //             {output.product}
  //           </h2>
  //           <h3>
  //             {output.price}
  //           </h3>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <>
      <Navbar scroll='true'/>
      <MarqueeBg/>
      <ShuffleHero />
      <ParallaxHero/>
      <Testimonial/>
    </>
  );
}

export default App;
