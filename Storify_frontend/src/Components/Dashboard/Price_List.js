import React, { useEffect, useState , useContext } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import AuthContext from '../../context/AuthContext'; // Adjust the path as necessary
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


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
      if (user) {  // Check if user is defined here
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/pricelist/${user_id}`);
          setPriceLists(response.data);
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      }
    };

    fetchItems();
  }, [user]); // user as a dependency

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-700">All Price Lists</h1>
          <Link to="/dashboard/Price_Form">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              + New Price List
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto border-b border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price List Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage Type</th>
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
