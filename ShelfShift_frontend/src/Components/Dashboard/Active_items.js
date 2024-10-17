import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import AuthContext from '../../context/AuthContext'; // Adjust the path as necessary
import { jwtDecode } from 'jwt-decode';

Modal.setAppElement('#root');

const ActiveItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);


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
          const response = await axios.get(`http://127.0.0.1:8000/api/items/${user_id}`);
          setItems(response.data);
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      }
    };

    fetchItems();
  }, [user]); // user as a dependency

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (<div className="p-6 h-screen bg-gray-50 dark:bg-[#030637] transition-all">
    <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Your Active Items</h1>

    <table className="min-w-full dark:bg-[#030637]border border-gray-300 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transition-all">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
          <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 text-center">Name</th>
          <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 text-center">SKU</th>
          <th className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 text-center">Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            onClick={() => openModal(item)}
            className="hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer transition-colors duration-200"
          >
            <td className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 text-center text-gray-900 dark:text-gray-100">{item.name}</td>
            <td className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 text-center text-gray-900 dark:text-gray-100">{item.sku}</td>
            <td className="py-3 px-5 border-b border-gray-300 dark:border-gray-600 text-center text-gray-900 dark:text-gray-100">{item.selling_price}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="modal fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 backdrop-blur-md"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full transition-all">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">
          {selectedItem?.name}
        </h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p><strong>SKU:</strong> {selectedItem?.sku}</p>
          <p><strong>Price:</strong> {selectedItem?.selling_price}</p>
          <p><strong>Description:</strong> {selectedItem?.sales_description}</p>
          <p><strong>Manufacturer:</strong> {selectedItem?.manufacturer}</p>
          <p><strong>Brand:</strong> {selectedItem?.brand}</p>
          <p><strong>UPC:</strong> {selectedItem?.upc}</p>
          <p><strong>MPN:</strong> {selectedItem?.mpn}</p>
          <p><strong>ISBN:</strong> {selectedItem?.isbn}</p>
          <p><strong>Weight:</strong> {selectedItem?.weight} {selectedItem?.weight_unit}</p>
          <p><strong>Dimensions:</strong> {selectedItem?.length} x {selectedItem?.width} x {selectedItem?.height} {selectedItem?.dimension_unit}</p>
          <p><strong>Opening Stock:</strong> {selectedItem?.opening_stock}</p>
          <p><strong>Reorder Point:</strong> {selectedItem?.reorder_point}</p>
        </div>
        <button
          onClick={closeModal}
          className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 dark:from-blue-600 dark:to-green-600 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-green-600 dark:hover:from-blue-700 dark:hover:to-green-700 transition-colors duration-200 w-full"
        >
          Close
        </button>
      </div>
    </Modal>
  </div>
  );
};

export default ActiveItems;
