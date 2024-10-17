import React, { useState } from "react";
import DatePicker from "react-flatpickr";
import { FaQuestionCircle, FaPlus, FaUpload, FaMoneyBillWave, FaSearch, FaTable } from 'react-icons/fa';
import "flatpickr/dist/themes/material_blue.css"; // Import a theme for the date picker
import { Link } from "react-router-dom";
function Bills() {
    const [vendor, setVendor] = useState("");
    const [vendorSearch, setVendorSearch] = useState("");
    const [billNumber, setBillNumber] = useState("");
    const [orderNumber, setOrderNumber] = useState("");
    const [billDate, setBillDate] = useState(null);
    const [dueDate, setDueDate] = useState(new Date("2024-09-16"));
    const [paymentTerms, setPaymentTerms] = useState("Due On Receipt");
    const [subject, setSubject] = useState("");
    const [items, setItems] = useState([{ details: '', account: '', quantity: 1, rate: 0, discount: 0, amount: 0 }]);
    const [taxType, setTaxType] = useState('TDS');
    const [selectedTax, setSelectedTax] = useState('');
    const [adjustment, setAdjustment] = useState('');
    const [customerNotes, setCustomerNotes] = useState('');
    const [terms, setTerms] = useState('');
    const [files, setFiles] = useState([]);

    const vendors = ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4"];

    const handleAddRow = () => {
        setItems([...items, { details: '', account: '', quantity: 1, rate: 0, discount: 0, amount: 0 }]);
    };

    const handleInputChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        newItems[index].amount = (newItems[index].quantity * newItems[index].rate * (1 - newItems[index].discount / 100)).toFixed(2);
        setItems(newItems);
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => total + parseFloat(item.amount), 0).toFixed(2);
    };

    const handleFileChange = (e) => {
        setFiles([...files, ...e.target.files]);
    };

    const filteredVendors = vendors.filter(vendor => vendor.toLowerCase().includes(vendorSearch.toLowerCase()));

    return (
        <div className="p-6 dark:bg-[#030637] min-h-screen">
            <div className="flex items-center mb-4">
                <FaMoneyBillWave className="text-3xl text-blue-600 dark:text-blue-400" />
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300 ml-2">Create New Bill</h1>
            </div>
            <div className="shadow-lg rounded-lg p-8 bg-white dark:bg-[#17153B]">
                {/* Vendor Selection */}
                <div className="mb-4">
                    <label className="block text-blue-600 dark:text-blue-300 font-bold mb-2">Vendor Name*</label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                            placeholder="Search Vendor"
                            value={vendorSearch}
                            onChange={(e) => setVendorSearch(e.target.value)}
                        />
                        <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            <FaSearch />
                        </button>
                    </div>
                    {vendorSearch && (
                        <ul className="mt-2 border rounded bg-white dark:bg-[#030637] shadow-lg">
                            {/* Assume filteredVendors is defined */}
                            {filteredVendors.map((vendor, index) => (
                                <li
                                    key={index}
                                    className="py-2 px-3 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700"
                                    onClick={() => {
                                        setVendor(vendor);
                                        setVendorSearch("");
                                    }}
                                >
                                    {vendor}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* Bill Information */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-blue-600 dark:text-blue-300 font-bold mb-2">Bill#*</label>
                        <input
                            type="text"
                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                            value={billNumber}
                            onChange={(e) => setBillNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 dark:text-gray-300 font-bold mb-2">Order Number</label>
                        <input
                            type="text"
                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-blue-600 dark:text-blue-300 font-bold mb-2">Bill Date*</label>
                        <DatePicker
                            selected={billDate}
                            onChange={(date) => setBillDate(date)}
                            dateFormat="d/m/Y"
                            placeholderText="dd/MM/yyyy"
                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 dark:text-gray-300 font-bold mb-2">Due Date</label>
                        <DatePicker
                            selected={dueDate}
                            onChange={(date) => setDueDate(date)}
                            dateFormat="d/m/Y"
                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-600 dark:text-gray-300 font-bold mb-2">Payment Terms</label>
                        <select
                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                            value={paymentTerms}
                            onChange={(e) => setPaymentTerms(e.target.value)}
                        >
                            <option>Due On Receipt</option>
                            <option>Net 7</option>
                            <option>Net 10</option>
                            <option>Net 15</option>
                            <option>Net 30</option>
                            <option>Net 60</option>
                            <option>Net 90</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 dark:text-gray-300 font-bold mb-2">Subject <FaQuestionCircle className="inline text-gray-400" /></label>
                    <input
                        type="text"
                        placeholder="Enter a subject within 250 characters"
                        className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white   "
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
            </div>

            {/* Item Table */}
            <div className="my-6 flex items-center">
                <FaTable className="text-lg text-blue-600 dark:text-blue-400" />
                <h2 className="text-gray-800 dark:text-gray-300 font-semibold text-xl ml-2">Item Table</h2>
            </div>
            <div className="shadow-lg rounded-lg p-6 bg-white dark:bg-[#17153B]">
                <table className="w-full border-collapse border border-gray-300 mb-6">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-[#1E1E2F]">
                            <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">ITEM DETAILS</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">ACCOUNT</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">QUANTITY</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">RATE</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">DISCOUNT</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="text"
                                        className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                        value={item.details}
                                        onChange={(e) => handleInputChange(index, 'details', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="text"
                                        className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                        value={item.account}
                                        onChange={(e) => handleInputChange(index, 'account', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="number"
                                        className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                        value={item.quantity}
                                        onChange={(e) => handleInputChange(index, 'quantity', parseFloat(e.target.value))}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="number"
                                        className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                        value={item.rate}
                                        onChange={(e) => handleInputChange(index, 'rate', parseFloat(e.target.value))}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="number"
                                        className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                        value={item.discount}
                                        onChange={(e) => handleInputChange(index, 'discount', parseFloat(e.target.value))}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    {(item.rate * item.quantity - item.discount).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={handleAddRow}
                >
                    <FaPlus className="inline" /> Add Item
                </button>
            </div>

            {/* File Upload Section */}
            <div className="my-6">
                <h2 className="text-gray-800 dark:text-gray-300 font-semibold text-xl mb-4">Upload Files</h2>
                <input
                    type="file"
                    className="p-4 block w-full rounded-md bg-white border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                    multiple
                    onChange={handleFileChange}
                />
            </div>

            {/* Customer Notes */}
            <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-bold mb-2">Customer Notes</label>
                <textarea
                    className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                    rows="4"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                ></textarea>
            </div>

            {/* Terms */}
            <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-bold mb-2">Terms</label>
                <textarea
                    className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                    rows="4"
                    value={terms}
                    onChange={(e) => setTerms(e.target.value)}
                ></textarea>
            </div>

            {/* Total Amount */}
            <div className="flex justify-end font-bold text-lg text-gray-800 dark:text-gray-300">
                <span>Total: ${calculateTotal()}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
                <Link to="/bills" className="bg-gray-300 dark:bg-[#292929] text-gray-800 dark:text-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">
                    Cancel
                </Link>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Save Bill
                </button>
            </div>
        </div>
    );
}

export default Bills;