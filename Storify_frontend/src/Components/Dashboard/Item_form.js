import React, { useState } from "react";
import { Link } from "react-router-dom";
const Item_form = () => {
  const [image, setImage] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Main Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">New Item</h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Item Type */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Type:
              </label>
              <div className="mt-1 flex space-x-4">
                <label>
                  <input type="radio" name="type" value="Goods" className="mr-1" />
                  Goods
                </label>
                <label>
                  <input type="radio" name="type" value="Service" className="mr-1" />
                  Service
                </label>
              </div>
            </div>

            {/* Image Upload Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Image
              </label>
              <div className="mt-1 border-dashed border-2 border-gray-300 rounded-md p-4 flex justify-center items-center">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded"
                    className="h-24 w-24 object-cover"
                  />
                ) : (
                  <p className="text-sm text-gray-600">Drag image(s) here or browse</p>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2"
              />
            </div>
          </div>

          {/* SKU and Unit */}
          <div className="grid grid-cols-3 gap-6">
          <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">SKU</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter SKU"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Unit</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Select Unit</option>
              </select>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="mr-2 rounded" id="returnable-item" />
              <label htmlFor="returnable-item" className="text-sm font-medium">
                Returnable Item
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Dimensions (L x W x H)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="L"
              />
              <input
                type="number"
                className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="W"
              />
              <input
                type="number"
                className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="H"
              />
              <select className="w-16 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>cm</option>
                <option>inch</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Weight</label>
            <div className="flex space-x-2">
              <input
                type="number"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Weight"
              />
              <select className="w-16 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>kg</option>
                <option>lbs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Manufacturer, Brand, UPC, MPN, ISBN */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Manufacturer</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Select or Add Manufacturer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Select or Add Brand"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">UPC</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">MPN</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">ISBN</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
          
          {/* Sales & Purchase Information */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium">Sales Information</h3>
              <label className="block text-sm font-medium text-gray-700">
                Selling Price
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Selling Price"
              />
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  placeholder="Enter description"
  rows="3"
/>

              <label className="block text-sm font-medium text-gray-700 mt-4">
                Account
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Select Account</option>
              </select>
            </div>

            <div>
              <h3 className="text-lg font-medium">Purchase Information</h3>
              <label className="block text-sm font-medium text-gray-700">
                Cost
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Cost"
              /> <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
placeholder="Enter description"
rows="3"
/>

              <label className="block text-sm font-medium text-gray-700 mt-4">
                Account
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Select Account</option>
              </select>
             
            </div>
          </div>

          {/* Inventory Tracking */}
          <div>
            <h3 className="text-lg font-medium">Track Inventory for this Item</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Inventory Account
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Select Account</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Opening Stock
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Opening Stock"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Reorder Point
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Reorder Point"
                />
              </div>
            </div>
          </div>

          {/* Save and Cancel Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <Link to='/dashboard/item'>
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Item_form;
