import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-100 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg p-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-bars text-gray-600 mr-4"></i>
          <h1 className="text-2xl font-bold text-blue-700">All Packages</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search Packages..."
            className="border rounded p-2 mr-4 focus:ring-2 focus:ring-blue-500"
          />
          <i className="fas fa-search text-gray-600"></i>
        </div>
        <Link to='/dashboard/package_form'>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
            + New Package
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Not Shipped Packages */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-blue-600">Not Shipped</h2>
              <button
                onClick={addNotShippedPackage}
                className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition"
              >
                + Add
              </button>
            </div>
            {notShippedPackages.length === 0 ? (
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <p className="text-gray-600">No Records Found</p>
              </div>
            ) : (
              notShippedPackages.map((pkg, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow mb-2">
                  <p className="text-gray-700">Package Details...</p>
                </div>
              ))
            )}
          </div>

          {/* Shipped Packages */}
          <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-yellow-600">Shipped</h2>
              <button
                onClick={addShippedPackage}
                className="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-700 transition"
              >
                + Add
              </button>
            </div>
            {shippedPackages.length === 0 ? (
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <p className="text-gray-600">No Records Found</p>
              </div>
            ) : (
              shippedPackages.map((pkg, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow mb-2">
                  <p className="text-gray-700">Package Details...</p>
                </div>
              ))
            )}
          </div>

          {/* Delivered Packages */}
          <div className="bg-green-50 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-green-600">Delivered</h2>
              <button
                onClick={addDeliveredPackage}
                className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition"
              >
                + Add
              </button>
            </div>
            {deliveredPackages.length === 0 ? (
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <p className="text-gray-600">No Records Found</p>
              </div>
            ) : (
              deliveredPackages.map((pkg, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow mb-2">
                  <p className="text-gray-700">Package Details...</p>
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
