import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import Navbar from './components/Navbar';

const App = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    let data;
    axios.get(`http://127.0.0.1:8000/`)
      .then(res => {
        data = res.data;
        setDetails(data);
      })
      .catch(err=>{
        console.log(err)
      })
  }, []); // Empty dependency array to run only on mount

  return (
    <div className='App'>
      <header>
        Django Generated Data:
      </header>
      <hr />
      {details.map((output, id) => (
        <div key={id}>
          <div>
            <h2>
              {output.product}
            </h2>
            <h3>
              {output.price}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );

  // return (
  //   <>
  //     <Navbar />
  //     <div className="flex items-center justify-center h-screen bg-gray-100">
  //       <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
  //     </div>
  //   </>
  // );
}

export default App;
