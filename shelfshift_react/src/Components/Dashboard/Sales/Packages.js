import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Packages = () => {
  const [notShippedPackages, setNotShippedPackages] = useState([]);
  const [shippedPackages, setShippedPackages] = useState([]);
  const [deliveredPackages, setDeliveredPackages] = useState([]);

  const addNotShippedPackage = () => {
    setNotShippedPackages([...notShippedPackages, {}]);
  };

  const addShippedPackage = () => {
    setShippedPackages([...shippedPackages, {}]);
  };

  const addDeliveredPackage = () => {
    setDeliveredPackages([...deliveredPackages, {}]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-bars text-gray-600 mr-4"></i>
          <h1 className="text-xl font-semibold">All Packages</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search in Packages ( / )"
            className="border rounded p-2 mr-4"
          />
          <i className="fas fa-search text-gray-600"></i>
        </div>
        <Link to='/package_form'>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">+ New</button></Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Not Shipped Packages */}
          <div className="bg-blue-100 p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Packages, Not Shipped</h2>
              <button
                onClick={addNotShippedPackage}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                + Add
              </button>
            </div>
            {notShippedPackages.length === 0 ? (
              <div className="bg-white p-4 rounded shadow">
                <p className="text-gray-600">No Records Found</p>
              </div>
            ) : (
              notShippedPackages.map((pkg, index) => (
                <div key={index} className="bg-white p-4 rounded shadow mb-2">
                  <p className="text-gray-600">Empty Card</p>
                </div>
              ))
            )}
          </div>

          {/* Shipped Packages */}
          <div className="bg-yellow-100 p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Shipped Packages</h2>
              <button
                onClick={addShippedPackage}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                + Add
              </button>
            </div>
            {shippedPackages.length === 0 ? (
              <div className="bg-white p-4 rounded shadow">
                <p className="text-gray-600">No Records Found</p>
              </div>
            ) : (
              shippedPackages.map((pkg, index) => (
                <div key={index} className="bg-white p-4 rounded shadow mb-2">
                  <p className="text-gray-600">Empty Card</p>
                </div>
              ))
            )}
          </div>

          {/* Delivered Packages */}
          <div className="bg-green-100 p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Delivered Packages</h2>
              <button
                onClick={addDeliveredPackage}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                + Add
              </button>
            </div>
            {deliveredPackages.length === 0 ? (
              <div className="bg-white p-4 rounded shadow">
                <p className="text-gray-600">No Records Found</p>
              </div>
            ) : (
              deliveredPackages.map((pkg, index) => (
                <div key={index} className="bg-white p-4 rounded shadow mb-2">
                  <p className="text-gray-600">Empty Card</p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Packages;
