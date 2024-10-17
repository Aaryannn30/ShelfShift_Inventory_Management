import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Composite = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [returnableItem, setReturnableItem] = useState(false);
  const [associatedItems, setAssociatedItems] = useState([{ name: "", quantity: 1, sellingPrice: 0, costPrice: 0 }]);
  const [associatedServices, setAssociatedServices] = useState([{ name: "", quantity: 1, sellingPrice: 0, costPrice: 0 }]);
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [unit, setUnit] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddItemRow = () => {
    setAssociatedItems([...associatedItems, { name: "", quantity: 1, sellingPrice: 0, costPrice: 0 }]);
  };

  const handleAddServiceRow = () => {
    setAssociatedServices([...associatedServices, { name: "", quantity: 1, sellingPrice: 0, costPrice: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...associatedItems];
    updatedItems[index][field] = value;
    setAssociatedItems(updatedItems);
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...associatedServices];
    updatedServices[index][field] = value;
    setAssociatedServices(updatedServices);
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

    const compositeData = {
      name,
      sku,
      unit,
      returnableItem,
      associatedItems,
      associatedServices,
      user: user_id
    };

    try {
      await axios.post('http://localhost:8000/api/composites/', compositeData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Clear the form fields
      setName("");
      setSku("");
      setUnit("");
      setReturnableItem(false);
      setAssociatedItems([{ name: "", quantity: 1, sellingPrice: 0, costPrice: 0 }]);
      setAssociatedServices([{ name: "", quantity: 1, sellingPrice: 0, costPrice: 0 }]);
      setImagePreview(null);

      // Navigate to the Active Composite items page
      navigate("/dashboard/active_composite");
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r dark:bg-[#030637] min-h-screen">
      <div className="border  max-w-5xl mx-auto dark:bg-[#17153B] bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6">Create New Composite Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-6 mb-4">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Name</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* SKU */}
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">SKU</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                required
              />
            </div>

            {/* Unit */}
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Unit</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Returnable Item */}
          <div className="mb-4">
            <label className="inline-flex items-center text-blue-700 dark:text-blue-300">
              <input
                type="checkbox"
                checked={returnableItem}
                onChange={(e) => setReturnableItem(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm text-blue-700 dark:text-blue-300">Returnable Item</span>
            </label>
          </div>

          {/* Associated Items */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">Associated Items</h3>
            {associatedItems.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, "name", e.target.value)}
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                />
                <input
                  type="number"
                  placeholder="Selling Price"
                  value={item.sellingPrice}
                  onChange={(e) => handleItemChange(index, "sellingPrice", e.target.value)}
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                />
                <input
                  type="number"
                  placeholder="Cost Price"
                  value={item.costPrice}
                  onChange={(e) => handleItemChange(index, "costPrice", e.target.value)}
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                />
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-blue-600 font-medium"
              onClick={handleAddItemRow}
            >
              + Add New Item
            </button>
          </div>

          {/* Associated Services */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">Associated Services</h3>
            {associatedServices.map((service, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Service Name"
                  value={service.name}
                  onChange={(e) => handleServiceChange(index, "name", e.target.value)}
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={service.quantity}
                  onChange={(e) => handleServiceChange(index, "quantity", e.target.value)}
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                />
                <input
                  type="number"
                  placeholder="Selling Price"
                  value={service.sellingPrice}
                  onChange={(e) => handleServiceChange(index, "sellingPrice", e.target.value)}
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                />
                <input
                  type="number"
                  placeholder="Cost Price"
                  value={service.costPrice}
                  onChange={(e) => handleServiceChange(index, "costPrice", e.target.value)}
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                />
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-blue-600 font-medium"
              onClick={handleAddServiceRow}
            >
              + Add New Service
            </button>
          </div>

          {/* Sales Information */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-medium mb-4 text-blue-700 dark:text-blue-300">Sales Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Selling Price</label>
                  <input
                    type="text"
                    className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Account</label>
                  <input
                    type="text"
                    className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Description</label>
                <textarea
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  rows="3"
                ></textarea>
              </div>
            </div>

            {/* Purchase Information */}
            <div>
              <h3 className="font-medium mb-4 text-blue-700 dark:text-blue-300">Purchase Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Cost Price</label>
                  <input
                    type="text"
                    className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Account</label>
                  <input
                    type="text"
                    className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Description</label>
                <textarea
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Preferred Vendor</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Dimensions (L x W x H)</label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  placeholder="L"
                />
                <input
                  type="text"
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  placeholder="W"
                />
                <input
                  type="text"
                  className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  placeholder="H"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Weight</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              />
            </div>
          </div>

          {/* Other Fields */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">UPC</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">EAN</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">ISBN</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Inventory Account</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Opening Stock</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-blue-700 dark:text-blue-300">Reorder Point</label>
              <input
                type="text"
                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <Link to="/dashboard/item">
              <button type="button" className="bg-gray-300 dark:bg-[#292929] text-gray-800 dark:text-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">
                Cancel
              </button>
            </Link>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Save
            </button>
            <Link to="/dashboard/active_composite">
              <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Items
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Composite;
