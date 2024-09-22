import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { jwtDecode } from 'jwt-decode';

const Price_Form = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [transactionType, setTransactionType] = useState("Sales");
  const [priceListType, setPriceListType] = useState("All Items");
  const [description, setDescription] = useState("");
  const [percentageType, setPercentageType] = useState("Markup");
  const [roundOff, setRoundOff] = useState("Never mind");
  
  const navigate = useNavigate();

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

    const formData = new FormData();
    formData.append("user", user_id);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("transaction_type", transactionType);
    formData.append("price_list_type", priceListType);
    formData.append("percentage_type", percentageType);
    formData.append("round_off_to", roundOff);

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/pricelist/new/${user_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Price list created successfully:", response.data);
      setName("");
      setTransactionType("Sales");
      setPriceListType("All Items");
      setDescription("");
      setPercentageType("Markup");
      setRoundOff("Never mind");
      navigate('/dashboard/Price_List');
    } catch (error) {
      console.error("Error creating price list:", error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-300 min-h-screen p-8">
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Price List</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 sm:text-sm p-2"
              placeholder="Enter name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Transaction Type:</label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="transactionType"
                  value="Sales"
                  checked={transactionType === "Sales"}
                  onChange={() => setTransactionType("Sales")}
                  className="mr-2"
                />
                <span>Sales</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="transactionType"
                  value="Purchase"
                  checked={transactionType === "Purchase"}
                  onChange={() => setTransactionType("Purchase")}
                  className="mr-2"
                />
                <span>Purchase</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price List Type:</label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceListType"
                  value="All Items"
                  checked={priceListType === "All Items"}
                  onChange={() => setPriceListType("All Items")}
                  className="mr-2"
                />
                <span>All Items</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceListType"
                  value="Individual Items"
                  checked={priceListType === "Individual Items"}
                  onChange={() => setPriceListType("Individual Items")}
                  className="mr-2"
                />
                <span>Individual Items</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 sm:text-sm p-2"
              placeholder="Enter the description"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Percentage*</label>
              <select
                value={percentageType}
                onChange={(e) => setPercentageType(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 sm:text-sm p-2"
              >
                <option value="Markup">Markup</option>
                <option value="Markdown">Markdown</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Round Off To</label>
              <select
                value={roundOff}
                onChange={(e) => setRoundOff(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 sm:text-sm p-2"
              >
                <option value="Never mind">Never mind</option>
                <option value="Nearest Whole">Nearest Whole</option>
                <option value="Nearest Decimal">Nearest Decimal</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <Link to='/dashboard/Price_List'>
              <button type="button" className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-200">
                Cancel
              </button>
            </Link>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Price_Form;
