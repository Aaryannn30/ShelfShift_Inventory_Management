import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Price_Form = () => {
  const [name, setName] = useState("");
  const [transactionType, setTransactionType] = useState("Sales");
  const [priceListType, setPriceListType] = useState("All Items");
  const [description, setDescription] = useState("");
  const [percentageType, setPercentageType] = useState("Markup");
  const [roundOff, setRoundOff] = useState("Never mind");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/api/price-lists/", {
        name,
        transactionType,
        priceListType,
        description,
        percentageType,
        roundOff,
      });
      navigate("/dashboard/PriceListsPage"); // Navigate to price lists page after saving
    } catch (error) {
      console.error("Error saving price list:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-6">New Price List</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="flex space-x-4">
            <label className="block text-sm font-medium text-gray-700">Transaction Type:</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="transactionType"
                  value="Sales"
                  checked={transactionType === "Sales"}
                  onChange={() => setTransactionType("Sales")}
                  className="mr-1"
                />
                Sales
              </label>
              <label>
                <input
                  type="radio"
                  name="transactionType"
                  value="Purchase"
                  checked={transactionType === "Purchase"}
                  onChange={() => setTransactionType("Purchase")}
                  className="mr-1"
                />
                Purchase
              </label>
            </div>
          </div>

          <div className="flex space-x-4">
            <label className="block text-sm font-medium text-gray-700">Price List Type:</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="priceListType"
                  value="All Items"
                  checked={priceListType === "All Items"}
                  onChange={() => setPriceListType("All Items")}
                  className="mr-1"
                />
                All Items
              </label>
              <label>
                <input
                  type="radio"
                  name="priceListType"
                  value="Individual Items"
                  checked={priceListType === "Individual Items"}
                  onChange={() => setPriceListType("Individual Items")}
                  className="mr-1"
                />
                Individual Items
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter the description"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Percentage*</label>
              <div className="mt-1">
                <select
                  value={percentageType}
                  onChange={(e) => setPercentageType(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="Markup">Markup</option>
                  <option value="Markdown">Markdown</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Round Off To</label>
              <div className="mt-1">
                <select
                  value={roundOff}
                  onChange={(e) => setRoundOff(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="Never mind">Never mind</option>
                  <option value="Nearest Whole">Nearest Whole</option>
                  <option value="Nearest Decimal">Nearest Decimal</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <Link to='/dashbord/Price_Form'>
            <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
              
              Cancel
            </button>
            </Link>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Price_Form;
