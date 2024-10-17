import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Make sure axios is imported
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { jwtDecode } from 'jwt-decode'; // Add this import if it's not already there


const ItemForm = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const [type, setType] = useState(""); // Goods or Service
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [unit, setUnit] = useState("");
  const [isReturnable, setIsReturnable] = useState(false);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [dimensionUnit, setDimensionUnit] = useState("cm");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");
  const [upc, setUpc] = useState("");
  const [mpn, setMpn] = useState("");
  const [isbn, setIsbn] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [salesDescription, setSalesDescription] = useState("");
  const [salesAccount, setSalesAccount] = useState("");
  const [cost, setCost] = useState("");
  const [purchaseDescription, setPurchaseDescription] = useState("");
  const [purchaseAccount, setPurchaseAccount] = useState("");
  const [inventoryAccount, setInventoryAccount] = useState("");
  const [openingStock, setOpeningStock] = useState("");
  const [reorderPoint, setReorderPoint] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
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

  if (!user || !user_id) {
    console.error("User is not defined or user ID is missing.");
    return;
  }

 
  if (!name || !sku || !sellingPrice) {
    console.error("Please fill in all required fields.");
    return;
  }

  const formData = new FormData();
  formData.append("user", user_id);
  formData.append("name", name);
  formData.append("sku", sku);
  formData.append("unit", unit);
  formData.append("is_returnable", isReturnable);
  formData.append("length", length);
  formData.append("width", width);
  formData.append("height", height);
  formData.append("dimension_unit", dimensionUnit);
  formData.append("weight", weight);
  formData.append("weight_unit", weightUnit);
  formData.append("manufacturer", manufacturer);
  formData.append("brand", brand);
  formData.append("upc", upc);
  formData.append("mpn", mpn);
  formData.append("isbn", isbn);
  formData.append("selling_price", sellingPrice);
  formData.append("sales_description", salesDescription);
  formData.append("sales_account", salesAccount);
  formData.append("cost", cost);
  formData.append("purchase_description", purchaseDescription);
  formData.append("purchase_account", purchaseAccount);
  formData.append("inventory_account", inventoryAccount);
  formData.append("opening_stock", openingStock);
  formData.append("reorder_point", reorderPoint);

  if (image) {
    formData.append("image", image);
  }

  try {
    const response = await axios.post(`http://127.0.0.1:8000/api/item/new/${user_id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Item created successfully:", response.data);
    setSuccessMessage('item added succesfully')

    setName("");
    setSku("");
    setBrand("")
    setCost("")
    sellingPrice("")
    setDimensionUnit("")
    setHeight("")
    setHeight("")
    setImage("")
    setInventoryAccount("")
    setIsReturnable("")
    setIsbn("");
  } catch (error) {
    console.error("Error creating item:", error.response?.data || error.message);
  }
};


  return (
    <div className="bg-gray-100  dark:bg-[#030637] min-h-screen p-6 ">
     
      <div className="bg-white dark:bg-[#17153B] shadow-lg rounded-lg p-8 max-w-6xl mx-auto border-2 border-white">
        
        <h2 className="text-2xl font-bold mb-6  text-[#526d82] dark:text-[#720455]">New Item</h2>
        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
            <p>{successMessage}</p>
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Item Type */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">
                Type:
              </label>
              <div className="mt-1 flex space-x-4">
                <label className="text-[#526d82] dark:text-[#720455] text-lg ">
                  <input
                    type="radio"
                    name="type"
                    value="Goods"
                    className=" mr-1"
                    checked={type === "Goods"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  Goods
                </label>
                <label className="text-[#526d82] dark:text-[#720455] text-lg">
                  <input
                    type="radio"
                    name="type"
                    value="Service"
                    className="mr-1"
                    checked={type === "Service"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  Service
                </label>
              </div>
            </div>

            {/* Image Upload Section */}
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">
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
                  <p className=" text-gray-600">Drag image(s) here or browse</p>
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

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium " >Name</label>
              <input
                type="text"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter Name"
                value={name}
                required
                
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">SKU</label>
              <input
                type="text"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter SKU"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
             required />
            </div>

            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Unit</label>
              <select
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option>Select Unit</option>
                <option>Piece</option>
                <option>Box</option>
                <option>Kg</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 rounded"
                id="returnable-item"
                checked={isReturnable}
                onChange={(e) => setIsReturnable(e.target.checked)}
              />
              <label htmlFor="returnable-item" className=" font-medium">
                Returnable Item
              </label>
            </div>
          </div>

          {/* Dimensions */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Dimensions (L x W x H)</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  placeholder="Length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
                <input
                  type="number"
                  className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  placeholder="Width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
                <input
                  type="number"
                  className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                  placeholder="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Dimension Unit</label>
              <select
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                value={dimensionUnit}
                onChange={(e) => setDimensionUnit(e.target.value)}
              >
                <option value="cm">cm</option>
                <option value="inch">inch</option>
              </select>
            </div>
          </div>

          {/* Weight */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Weight</label>
              <input
                type="number"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Weight Unit</label>
              <select
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
          </div>

          {/* Other Identifiers */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Manufacturer</label>
              <input
                type="text"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter Manufacturer"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Brand</label>
              <input
                type="text"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">UPC</label>
              <input
                type="text"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter UPC"
                value={upc}
                onChange={(e) => setUpc(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">MPN</label>
              <input
                type="text"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter MPN"
                value={mpn}
                onChange={(e) => setMpn(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">ISBN</label>
              <input
                type="text"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter ISBN"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </div>
          </div>

          {/* Sales Information */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Selling Price</label>
              <input
                type="number"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter Selling Price"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Sales Description</label>
              <textarea
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter Sales Description"
                value={salesDescription}
                onChange={(e) => setSalesDescription(e.target.value)}
              />
            </div>
          </div>

          {/* Purchase Information */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Cost</label>
              <input
                type="number"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter Cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Purchase Description</label>
              <textarea
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter Purchase Description"
                value={purchaseDescription}
                onChange={(e) => setPurchaseDescription(e.target.value)}
              />
            </div>
          </div>

          {/* Accounts and Inventory */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Sales Account</label>
              <select
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                value={salesAccount}
                onChange={(e) => setSalesAccount(e.target.value)}
              >
                <option>Select Sales Account</option>
                <option>Revenue</option>
                <option>Income</option>
              </select>
            </div>

            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Purchase Account</label>
              <select
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                value={purchaseAccount}
                onChange={(e) => setPurchaseAccount(e.target.value)}
              >
                <option>Select Purchase Account</option>
                <option>Expense</option>
                <option>Cost of Goods Sold</option>
              </select>
            </div>

            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Inventory Account</label>
              <select
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                value={inventoryAccount}
                onChange={(e) => setInventoryAccount(e.target.value)}
              >
                <option>Select Inventory Account</option>
                <option>Inventory Asset</option>
                <option>Inventory Control</option>
              </select>
            </div>
          </div>

          {/* Stock Information */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Opening Stock</label>
              <input
                type="number"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter Opening Stock"
                value={openingStock}
                onChange={(e) => setOpeningStock(e.target.value)}
              />
            </div>

            <div>
              <label className="text-[#526d82] dark:text-[#720455] text-lg block  font-medium ">Reorder Point</label>
              <input
                type="number"
                className="p-3 mt-2 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                placeholder="Enter Reorder Point"
                value={reorderPoint}
                onChange={(e) => setReorderPoint(e.target.value)}
              />
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
            <Link to='/dashboard/active_items'>
            <button
              type="submit"
              className="bg-[#720455] hover:bg-[#ab2657] text-white px-4 py-2 rounded-md"
            >
              View Items
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>

  );
}

export default ItemForm;

