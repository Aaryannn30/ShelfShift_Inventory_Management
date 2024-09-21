import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Item_group = () => {
  const [attributes, setAttributes] = useState([{ attribute: "", option: "" }]);
  const [itemGroupName, setItemGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");
  const [returnable, setReturnable] = useState(false);
  const [itemType, setItemType] = useState("");

  const [manufacturers, setManufacturers] = useState([
    { id: 1, name: "Manufacturer A" },
    { id: 2, name: "Manufacturer B" },
  ]);
  
  const [brands, setBrands] = useState([
    { id: 1, name: "Brand X" },
    { id: 2, name: "Brand Y" },
  ]);

  const addAttribute = () => {
    setAttributes([...attributes, { attribute: "", option: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authTokens");

    if (!token) {
      console.error("No authentication token found.");
      return;
    }

    const decoded = jwtDecode(token);
    const user_id = decoded.user_id;

    if (!user_id) {
      console.error("User ID is missing.");
      return;
    }

    const data = {
      user: user_id,
      item_group_name: itemGroupName,
      description: description,
      manufacturer: manufacturer,
      brand: brand,
      returnable_item: returnable, // boolean
      attributes: attributes, // array of attributes (will be converted to JSON by axios)
    };
  
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/group_item/new/${user_id}`,
        data, // Send plain object, not FormData
        {
          headers: {
            "Content-Type": "application/json", // Send as JSON
          },
        }
      );
      // Clear the form
      console.log("Item created successfully:", response.data);
      setItemGroupName("");
      setDescription("");
      setManufacturer("");
      setBrand("");
      setReturnable(false);
      setItemType("");
      setAttributes([{ attribute: "", option: "" }]);
      alert("Item group saved successfully!");
    } catch (error) {
      console.error("Error saving item group:", error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Main Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">New Item Group</h2>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Item Type */}
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium">Type:</label>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="type"
                  value="Goods"
                  onChange={() => setItemType("Goods")}
                  className="mr-1"
                />
                Goods
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Service"
                  onChange={() => setItemType("Service")}
                  className="mr-1"
                />
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
              value={itemGroupName}
              onChange={(e) => setItemGroupName(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              >
                <option value="">Select or add manufacturer</option>
                {manufacturers.map((manufacturer) => (
                  <option key={manufacturer.id} value={manufacturer.id}>
                    {manufacturer.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">Select or add brand</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Returnable Item */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 rounded"
              checked={returnable}
              onChange={() => setReturnable(!returnable)}
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

         
          {/* Save and Cancel Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <Link to='/dashboard/item'>
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button></Link>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
            <Link to='/dashboard/group_item'>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                View Items
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Item_group;