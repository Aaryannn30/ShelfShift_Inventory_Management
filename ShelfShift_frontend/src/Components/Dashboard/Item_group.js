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
    <div className="min-h-screen p-6 bg-[#dde6ed] dark:bg-[#030637]">
  <div className="bg-white dark:bg-[#17153B] shadow-lg rounded-lg p-8 max-w-5xl mx-auto border-2 border-orange-50">
    <h2 className="text-3xl font-bold text-[#526d82] dark:text-[#720455] mb-8 text-center">Create New Item Group</h2>

    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Item Type */}
      <div className="flex items-center justify-center space-x-6">
        <label className="text-lg font-medium text-[#526d82] dark:text-[#720455]">Type:</label>
        <div className="flex space-x-4">
          <label className="flex items-center dark:text-blue-300">
            <input
              type="radio"
              name="type"
              value="Goods"
              onChange={() => setItemType("Goods")}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 dark:text-blue-300"
            />
            Goods
          </label>
          <label className="flex items-center dark:text-blue-300">
            <input
              type="radio"
              name="type"
              value="Service"
              onChange={() => setItemType("Service")}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 dark:text-blue-300"
            />
            Service
          </label>
        </div>
      </div>

      {/* Item Group Name */}
      <div>
        <label className="block text-lg font-medium text-[#526d82] dark:text-[#720455]">Item Group Name</label>
        <input
          type="text"
          className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
          placeholder="Enter item group name"
          value={itemGroupName}
          onChange={(e) => setItemGroupName(e.target.value)}
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-lg font-medium text-[#526d82] dark:text-[#720455]">Description</label>
        <textarea
          className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
          rows="4"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      {/* Manufacturer and Brand */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-lg font-medium text-[#526d82] dark:text-[#720455]">Manufacturer</label>
          <select
            className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
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
          <label className="block text-lg font-medium text-[#526d82] dark:text-[#720455]">Brand</label>
          <select
            className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
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
          className="w-4 h-4 mr-2 rounded text-pink-600 focus:ring-pink-500 dark:bg-[#910A67] dark:text-blue-300"
          checked={returnable}
          onChange={() => setReturnable(!returnable)}
        />
        <label className="text-lg font-medium text-[#526d82] dark:text-[#720455]">Returnable Item</label>
      </div>

      {/* Attributes and Options */}
      <div>
        <label className="p-4 block text-lg font-medium text-[#526d82] dark:text-[#720455]">Create Attributes and Options</label>
        {attributes.map((attr, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 mt-2">
            <input
              type="text"
              className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
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
              className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
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
          className="mt-4 text-blue-600 font-medium dark:text-blue-300"
        >
          + Add more attributes
        </button>
      </div>

      {/* Submit Button */}
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
            className="bg-[#720455] hover:bg-[#ab2657] text-white px-4 py-2 rounded-md"
          >
            View Items
          </button>
        </Link>
      </div>
    </form>

    <div className="mt-6 text-center">
      <Link to="/dashboard/item" className="text-blue-600 hover:underline dark:text-blue-300">
        Go Back 
      </Link>
    </div>
  </div>
</div>

  );
};

export default ItemGroup;
