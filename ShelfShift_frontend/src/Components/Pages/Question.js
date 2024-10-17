import React from "react";
import { BsQuestion } from "react-icons/bs";

function Question() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-200 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg p-10 relative">
        {/* Logo or Illustration */}
        <div className="text-center mb-6">
          <img
            src="your-logo-url.png"
            alt="Organization Logo"
            className="mx-auto h-20 w-20 transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Set up your organization profile
          </h1>
          <div className="mt-2 border-t-4 border-yellow-500 w-12 mx-auto"></div>
        </div>

        {/* Form Section */}
        <form>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Organization Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organization Name*
              </label>
              <input
                type="text"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Organization Name"
              />
            </div>
            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry*
              </label>
              <select className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                <option>Health Care</option>
                <option>Education</option>
                <option>Finance</option>
                <option>Technology</option>
              </select>
            </div>

            {/* Organization Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organization Location*
              </label>
              <select className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Australia</option>
              </select>
            </div>

            {/* State/Union Territory */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State/Union Territory*
              </label>
              <input
                type="text"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="State/Union Territory"
              />
            </div>

            {/* Regional Settings */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Currency*
              </label>
              <select className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                <option>INR - Indian Rupee</option>
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language*
              </label>
              <select className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time Zone*
              </label>
              <select className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                <option>(GMT +5:30) India Standard Time (Asia/Calcutta)</option>
                <option>(GMT +0:00) Greenwich Mean Time (GMT)</option>
                <option>(GMT -5:00) Eastern Standard Time (EST)</option>
                <option>(GMT +1:00) Central European Time (CET)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Inventory Start Date*
              </label>
              <input
                type="date"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fiscal Year*
              </label>
              <select className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                <option>April - March</option>
                <option>January - December</option>
              </select>
            </div>
          </div>

          {/* Additional Information and Actions */}
          <div className="mt-8 text-sm text-gray-600 text-center">
            <p>
              <span className="text-red-500">*</span> Required fields
            </p>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 px-5 rounded-lg shadow-md hover:bg-yellow-700 transform hover:scale-105 transition duration-300"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Question;
