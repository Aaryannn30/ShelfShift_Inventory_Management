import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

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
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">New Composite Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-6">
            {/* Name */}
            <div>
              <label className="block font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* SKU */}
            <div>
              <label className="block font-medium mb-2">SKU</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </div>

            {/* Unit */}
            <div>
              <label className="block font-medium mb-2">Unit</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
            </div>
          </div>

          {/* Returnable Item */}
          <div className="mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={returnableItem}
                onChange={(e) => setReturnableItem(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">Returnable Item</span>
            </label>
          </div>

          {/* Associated Items */}
          <div className="mt-6">
            <h3 className="font-medium">Associated Items</h3>
            {associatedItems.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, "name", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Selling Price"
                  value={item.sellingPrice}
                  onChange={(e) => handleItemChange(index, "sellingPrice", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Cost Price"
                  value={item.costPrice}
                  onChange={(e) => handleItemChange(index, "costPrice", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-blue-600 font-medium"
              onClick={handleAddItemRow}
            >
              + Add New Row
            </button>
          </div>

          {/* Associated Services */}
          <div className="mt-6">
            <h3 className="font-medium">Associated Services</h3>
            {associatedServices.map((service, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mt-2">
                <input
                  type="text"
                  placeholder="Service Name"
                  value={service.name}
                  onChange={(e) => handleServiceChange(index, "name", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={service.quantity}
                  onChange={(e) => handleServiceChange(index, "quantity", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Selling Price"
                  value={service.sellingPrice}
                  onChange={(e) => handleServiceChange(index, "sellingPrice", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Cost Price"
                  value={service.costPrice}
                  onChange={(e) => handleServiceChange(index, "costPrice", e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-blue-600 font-medium"
              onClick={handleAddServiceRow}
            >
              + Add New Row
            </button>
          </div>

          {/* Save and View Items */}
          <div className="mt-6 flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md"
            >
              Save
            </button>
            <Link to="/dashboard/active_composite">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md"
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

export default Composite;