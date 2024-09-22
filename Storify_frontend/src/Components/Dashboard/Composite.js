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
    <div className="p-8 bg-gradient-to-r from-green-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Create New Composite Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-6 mb-4">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* SKU */}
            <div>
              <label className="block font-medium mb-1">SKU</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                required
              />
            </div>

            {/* Unit */}
            <div>
              <label className="block font-medium mb-1">Unit</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Returnable Item */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={returnableItem}
                onChange={(e) => setReturnableItem(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">Returnable Item</span>
            </label>
          </div>

          {/* Associated Items */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">Associated Items</h3>
            {associatedItems.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, "name", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                />
                <input
                  type="number"
                  placeholder="Selling Price"
                  value={item.sellingPrice}
                  onChange={(e) => handleItemChange(index, "sellingPrice", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                />
                <input
                  type="number"
                  placeholder="Cost Price"
                  value={item.costPrice}
                  onChange={(e) => handleItemChange(index, "costPrice", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
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
            <h3 className="text-lg font-medium text-gray-800">Associated Services</h3>
            {associatedServices.map((service, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Service Name"
                  value={service.name}
                  onChange={(e) => handleServiceChange(index, "name", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={service.quantity}
                  onChange={(e) => handleServiceChange(index, "quantity", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                />
                <input
                  type="number"
                  placeholder="Selling Price"
                  value={service.sellingPrice}
                  onChange={(e) => handleServiceChange(index, "sellingPrice", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                />
                <input
                  type="number"
                  placeholder="Cost Price"
                  value={service.costPrice}
                  onChange={(e) => handleServiceChange(index, "costPrice", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
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
              <h3 className="font-medium mb-4 text-gray-800">Sales Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Selling Price</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Account</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                  rows="3"
                ></textarea>
              </div>
            </div>

            {/* Purchase Information */}
            <div>
              <h3 className="font-medium mb-4 text-gray-800">Purchase Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Cost Price</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Account</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <label className="block font-medium mb-1">Preferred Vendor</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Dimensions (L x W x H)</label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="L"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="W"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="H"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Weight</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Other Fields */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <label className="block font-medium mb-1">UPC</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">EAN</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">ISBN</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <label className="block font-medium mb-1">Inventory Account</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Opening Stock</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Reorder Point</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end">
            <Link to="/dashboard/item">
              <button type="button" className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md mr-2">
                Cancel
              </button>
            </Link>
            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-md mr-2">
              Save
            </button>
            <Link to="/dashboard/active_composite">
              <button type="button" className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md">
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
