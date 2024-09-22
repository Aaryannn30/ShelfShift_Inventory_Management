import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import AuthContext from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const PriceListsPage = () => {
  const [priceLists, setPriceLists] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
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

    const fetchItems = async () => {
      if (user) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/pricelist/${user_id}`);
          setPriceLists(response.data);
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      }
    };

    fetchItems();
  }, [user]);

  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-300 min-h-screen p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">All Price Lists</h1>
          <Link to="/dashboard/Price_Form">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200">
              + New Price List
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto border-b border-gray-300">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Description</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Transaction Type</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Price List Type</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Percentage Type</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {priceLists.length > 0 ? (
                priceLists.map((priceList) => (
                  <tr key={priceList.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{priceList.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{priceList.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{priceList.transaction_type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{priceList.price_list_type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{priceList.percentage_type}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                    No price lists available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceListsPage;
