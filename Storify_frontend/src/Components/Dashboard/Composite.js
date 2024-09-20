import React, { useState } from "react";

const Composite = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [returnableItem, setReturnableItem] = useState(false);
  const [associatedItems, setAssociatedItems] = useState([{ name: "", quantity: 1, sellingPrice: 0, costPrice: 0 }]);
  const [associatedServices, setAssociatedServices] = useState([{ name: "", quantity: 1, sellingPrice: 0, costPrice: 0 }]);

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

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">New Composite Item</h2>
        <form>
          <div className="grid grid-cols-3 gap-6">
            {/* Name */}
            <div>
              <label className="block font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            {/* SKU */}
            <div>
              <label className="block font-medium mb-2">SKU</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            {/* Unit */}
            <div>
              <label className="block font-medium mb-2">Unit</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
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

          {/* Image Upload */}
          <div className="mt-6">
            <label className="block font-medium mb-2">Image Upload</label>
            <div className="border border-dashed border-gray-300 p-4 rounded-lg flex justify-center items-center">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover"
                />
              ) : (
                <div className="text-center">
                  <p>Drag image here</p>
                  <p>or</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-2"
                  />
                </div>
              )}
            </div>
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

          {/* Sales Information */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-medium mb-4">Sales Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">Selling Price</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Account</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block font-medium mb-2">Description</label>
                <textarea
                  className="w-full border border-gray-300 p-2 rounded-md"
                  rows="3"
                ></textarea>
              </div>
            </div>

            {/* Purchase Information */}
            <div>
              <h3 className="font-medium mb-4">Purchase Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">Cost Price</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Account</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block font-medium mb-2">Description</label>
                <textarea
                  className="w-full border border-gray-300 p-2 rounded-md"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div>
              <label className="block font-medium mb-2">Preferred Vendor</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Dimensions (L x W x H)</label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="L"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="W"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  placeholder="H"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-2">Weight</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Brand</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          {/* Other Fields */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div>
              <label className="block font-medium mb-2">UPC</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">EAN</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">ISBN</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div>
              <label className="block font-medium mb-2">Inventory Account</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Opening Stock</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Reorder Point</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          {/* New Additional Fields */}
          
          {/* Buttons */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="bg-blue-600 text-white py-2 px-6 rounded-md mr-4"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Composite;
