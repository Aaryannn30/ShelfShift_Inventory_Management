import React, { useState } from "react";

const Item_group = () => {
  const [attributes, setAttributes] = useState([{ attribute: "", option: "" }]);

  const addAttribute = () => {
    setAttributes([...attributes, { attribute: "", option: "" }]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Main Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">New Item Group</h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Item Type */}
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium">Type:</label>
            <div>
              <label className="mr-4">
                <input type="radio" name="type" value="Goods" className="mr-1" />
                Goods
              </label>
              <label>
                <input type="radio" name="type" value="Service" className="mr-1" />
                Service
              </label>
            </div>
          </div>

          {/* Item Group Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item Group Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter item group name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              rows="4"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Manufacturer and Brand */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Manufacturer
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Select or add manufacturer</option>
                {/* Add more options here */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Select or add brand</option>
                {/* Add more options here */}
              </select>
            </div>
          </div>

          {/* Returnable Item */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 rounded"
              id="returnable-item"
            />
            <label htmlFor="returnable-item" className="text-sm font-medium">
              Returnable Item
            </label>
          </div>

          {/* Attributes and Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Create Attributes and Options
            </label>
            {attributes.map((attr, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mt-2">
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Attribute (e.g. color)"
                  value={attr.attribute}
                  onChange={(e) => {
                    const updatedAttributes = [...attributes];
                    updatedAttributes[index].attribute = e.target.value;
                    setAttributes(updatedAttributes);
                  }}
                />
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Options (e.g. red, blue)"
                  value={attr.option}
                  onChange={(e) => {
                    const updatedAttributes = [...attributes];
                    updatedAttributes[index].option = e.target.value;
                    setAttributes(updatedAttributes);
                  }}
                />
              </div>
            ))}

            {/* Add Attribute Button */}
            <button
              type="button"
              onClick={addAttribute}
              className="mt-4 text-blue-500"
            >
              + Add more attributes
            </button>
          </div>

          {/* Item Type Selection */}
          <div className="flex space-x-4 mt-4">
            <label className="text-sm font-medium">Select your Item Type:</label>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="itemType"
                  value="Inventory"
                  className="mr-1"
                />
                Inventory
              </label>
              <label>
                <input
                  type="radio"
                  name="itemType"
                  value="Non-Inventory"
                  className="mr-1"
                />
                Non-Inventory
              </label>
            </div>
          </div>

          {/* Table: SKU and Pricing */}
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
                <tr>
                  <th className="py-3 px-6">Item Name</th>
                  <th className="py-3 px-6">SKU</th>
                  <th className="py-3 px-6">Cost Price</th>
                  <th className="py-3 px-6">Selling Price</th>
                  <th className="py-3 px-6">UPC</th>
                  <th className="py-3 px-6">EAN</th>
                  <th className="py-3 px-6">ISEN</th>
                  <th className="py-3 px-6">Reorder Point</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-6">No item data</td>
                  <td colSpan="7" className="text-center">
                    Please enter attributes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Save and Cancel Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
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

export default Item_group;
