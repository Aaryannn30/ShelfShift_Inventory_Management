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
    <div className="bg-gradient-to-r dark:bg-[#030637] min-h-screen p-6">
      <div className="bg-white dark:bg-[#17153B] border shadow-xl rounded-lg p-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">All Price Lists</h1>
          <Link to="/dashboard/Price_Form">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200">
              + New Price List
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto border-b border-gray-300">
          <table className="w-full border-collapse border border-gray-300 mb-6">
            <thead className="bg-gray-100">
              <tr className="bg-gray-100 dark:bg-[#1E1E2F]">
                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Name</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Description</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Transaction Type</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Price List Type</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Percentage Type</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {priceLists.length > 0 ? (
                priceLists.map((priceList) => (
                  <tr key={priceList.id} >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#17153B]">{priceList.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#17153B]">{priceList.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#17153B]">{priceList.transaction_type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#17153B]">{priceList.price_list_type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#17153B]">{priceList.percentage_type}</td>
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
