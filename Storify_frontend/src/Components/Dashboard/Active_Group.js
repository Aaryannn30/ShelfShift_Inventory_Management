import React, { useEffect, useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { Link } from "react-router-dom";

const Active_group = () => {
  const [itemGroups, setItemGroups] = useState([]);

  const fetchItemGroups = async () => {
    const token = localStorage.getItem("authTokens");

    if (!token) {
      console.error("No authentication token found.");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const user_id = decoded.user_id;

      const response = await axios.get(`http://127.0.0.1:8000/api/item/${user_id}`, formData,  {
        headers : {
            "Content-Type": "multipart/form-data",
          },
    });
      setItemGroups(response.data);
    } catch (error) {
      console.error("Error fetching item groups:", error);
    }
  };

  useEffect(() => {
    fetchItemGroups();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Active Item Groups</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Group Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manufacturer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Returnable Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {itemGroups.map((group) => (
              <tr key={group.id}>
                <td className="px-6 py-4 whitespace-nowrap">{group.item_group_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{group.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{group.manufacturer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{group.brand}</td>
                <td className="px-6 py-4 whitespace-nowrap">{group.returnable_item ? "Yes" : "No"}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to='dashboard/active_items' className="text-blue-500 hover:text-blue-700">
                    View Item
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Active_group;