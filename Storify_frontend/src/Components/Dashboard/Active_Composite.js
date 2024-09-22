import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ActiveComposite = () => {
  const [composites, setComposites] = useState([]);

  useEffect(() => {
    const fetchComposites = async () => {
      const token = localStorage.getItem("authTokens");
      if (!token) {
        console.error("No authentication token found.");
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/composites/', {
          headers: {
            "Authorization": `Bearer ${token}`, // Include token if needed for auth
            "Content-Type": "application/json",
          },
        });
        setComposites(response.data); // Assign the fetched data to the state
      } catch (error) {
        console.error("Error fetching composites:", error);
      }
    };

    fetchComposites();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Active Composite Items</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">SKU</th>
              <th className="px-4 py-2">Unit</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {composites.map((composite) => (
              <tr key={composite.id}>
                <td className="border px-4 py-2">{composite.name}</td>
                <td className="border px-4 py-2">{composite.sku}</td>
                <td className="border px-4 py-2">{composite.unit}</td>
                <td className="border px-4 py-2">
                  <Link to='/dashboard' className="text-blue-600">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveComposite;
