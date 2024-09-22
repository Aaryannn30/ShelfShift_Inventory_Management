import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ItemGroup = () => {
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
      returnable_item: returnable,
      attributes: attributes,
    };
  
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/group_item/new/${user_id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Item created successfully:", response.data);
      // Clear the form
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
    <div className="bg-gradient-to-r from-green-100 to-blue-100 min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Create New Item Group</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Item Type */}
          <div className="flex items-center justify-center space-x-6">
            <label className="text-lg font-medium">Type:</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Goods"
                  onChange={() => setItemType("Goods")}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                Goods
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Service"
                  onChange={() => setItemType("Service")}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                Service
              </label>
            </div>
          </div>

          {/* Item Group Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Item Group Name</label>
            <input
              type="text"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter item group name"
              value={itemGroupName}
              onChange={(e) => setItemGroupName(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Description</label>
            <textarea
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              rows="4"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Manufacturer and Brand */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">Manufacturer</label>
              <select
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              >
                <option value="">Select or add manufacturer</option>
                {manufacturers.map((mfr) => (
                  <option key={mfr.id} value={mfr.id}>
                    {mfr.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Brand</label>
              <select
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">Select or add brand</option>
                {brands.map((bnd) => (
                  <option key={bnd.id} value={bnd.id}>
                    {bnd.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Returnable Item */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 rounded text-blue-600 focus:ring-blue-500"
              checked={returnable}
              onChange={() => setReturnable(!returnable)}
            />
            <label className="text-lg font-medium">Returnable Item</label>
          </div>

          {/* Attributes and Options */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Create Attributes and Options</label>
            {attributes.map((attr, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mt-2">
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
              className="mt-4 text-blue-600 font-medium"
            >
              + Add more attributes
            </button>
          </div>

          {/* Save and Cancel Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <Link to='/dashboard/item'>
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
            <Link to='/dashboard/item'>
              <button
                type="button"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
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

export default ItemGroup;
