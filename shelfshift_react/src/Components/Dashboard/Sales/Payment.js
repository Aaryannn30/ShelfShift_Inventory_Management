import React from 'react';
import {Link} from 'react-router-dom'

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Navigation */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">All Received Payments</h1>
        <Link to='/payment_form'>
        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow">
          + New
        </button></Link>
      </div>

      {/* Payment Section */}
      <div className="mt-10 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-center text-gray-600">No payments received, yet</h2>
        <p className="text-center text-gray-500 mb-6">
          Payments will be added once your customers pay for their invoices.
        </p>
        <div className="text-center">
          <Link to='/payment_form'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Go to Unpaid Invoices
          </button></Link>
          <button className="mt-4 text-blue-500 underline">Import Payments</button>
        </div>
      </div>

      {/* Life Cycle Diagram */}
      <div className="mt-12 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-center text-gray-600 font-semibold">
          Life Cycle of a Customer Payment
        </h3>
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-3xl">
            <img 
              src="https://via.placeholder.com/600x200" 
              alt="Life Cycle Diagram" 
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
