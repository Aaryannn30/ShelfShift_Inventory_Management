import React, { useState } from "react";
import DatePicker from "react-flatpickr";
import { FaQuestionCircle, FaPlus, FaUpload, FaMoneyBillWave, FaSearch, FaTable } from 'react-icons/fa';
import "flatpickr/dist/themes/material_blue.css"; // Import a theme for the date picker

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
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
            <div className="flex items-center mb-4">
                <FaMoneyBillWave className="text-3xl text-blue-600" />
                <h1 className="text-3xl font-bold text-blue-700 ml-2">Create New Bill</h1>
            </div>
            <div className="shadow-lg rounded-lg p-8 bg-white">
                <div className="mb-4">
                    <label className="block text-blue-600 font-bold mb-2">Vendor Name*</label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search Vendor"
                            value={vendorSearch}
                            onChange={(e) => setVendorSearch(e.target.value)}
                        />
                        <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            <FaSearch />
                        </button>
                    </div>
                    {vendorSearch && (
                        <ul className="mt-2 border rounded bg-white shadow-lg">
                            {filteredVendors.map((vendor, index) => (
                                <li
                                    key={index}
                                    className="py-2 px-3 cursor-pointer hover:bg-blue-200"
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
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-blue-600 font-bold mb-2">Bill#*</label>
                        <input
                            type="text"
                            className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={billNumber}
                            onChange={(e) => setBillNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-bold mb-2">Order Number</label>
                        <input
                            type="text"
                            className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-blue-600 font-bold mb-2">Bill Date*</label>
                        <DatePicker
                            value={billDate}
                            onChange={(date) => setBillDate(date)}
                            options={{ dateFormat: "d/m/Y" }}
                            placeholder="dd/MM/yyyy"
                            className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-bold mb-2">Due Date</label>
                        <DatePicker
                            value={dueDate}
                            onChange={(date) => setDueDate(date)}
                            options={{ dateFormat: "d/m/Y" }}
                            className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-600 font-bold mb-2">Payment Terms</label>
                        <select
                            className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <label className="block text-gray-600 font-bold mb-2">Subject <i className="fas fa-info-circle text-gray-400"></i></label>
                    <input
                        type="text"
                        placeholder="Enter a subject within 250 characters"
                        className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="my-6 flex items-center">
                <FaTable className="text-lg text-blue-600" />
                <h2 className="text-gray-800 font-semibold text-xl ml-2">Item Table</h2>
            </div>
            <div className="shadow-lg rounded-lg p-6 bg-white">
                <table className="w-full border-collapse border border-gray-300 mb-6">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-3 text-left text-gray-700">ITEM DETAILS</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700">ACCOUNT</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700">QUANTITY</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700">RATE</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700">DISCOUNT</th>
                            <th className="border border-gray-300 p-3 text-left text-gray-700">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2 bg-white text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Type or click to select an item."
                                        value={item.details}
                                        onChange={(e) => handleInputChange(index, 'details', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2 bg-white text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={item.account}
                                        onChange={(e) => handleInputChange(index, 'account', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="number"
                                        min="1"
                                        className="w-full border rounded p-2 bg-white text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={item.quantity}
                                        onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="number"
                                        min="0"
                                        className="w-full border rounded p-2 bg-white text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={item.rate}
                                        onChange={(e) => handleInputChange(index, 'rate', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <input
                                        type="number"
                                        min="0"
                                        className="w-full border rounded p-2 bg-white text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={item.discount}
                                        onChange={(e) => handleInputChange(index, 'discount', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={handleAddRow} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center">
                    <FaPlus className="mr-2" /> Add Item
                </button>
                <div className="mt-4 text-right font-bold text-lg">
                    Total Amount: ${calculateTotal()}
                </div>
            </div>

            <div className="my-6 flex items-center">
                <FaUpload className="text-lg text-blue-600" />
                <h2 className="text-gray-800 font-semibold text-xl ml-2">Upload Files</h2>
            </div>
            <div className="shadow-lg rounded-lg p-6 bg-white mb-6">
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="mb-4 border rounded bg-gray-100 p-2"
                />
                <ul className="list-disc ml-6">
                    {files.map((file, index) => (
                        <li key={index} className="text-gray-600">{file.name}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <label className="block text-gray-600 font-bold mb-2">Customer Notes</label>
                <textarea
                    rows="4"
                    className="border rounded w-full p-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Notes for customer..."
                ></textarea>
            </div>

            <div className="mb-6">
                <label className="block text-gray-600 font-bold mb-2">Terms</label>
                <textarea
                    rows="4"
                    className="border rounded w-full p-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={terms}
                    onChange={(e) => setTerms(e.target.value)}
                    placeholder="Terms and conditions..."
                ></textarea>
            </div>

            <div className="flex justify-between mt-6">
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition">Cancel</button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Save Bill</button>
            </div>
        </div>
    );
}

export default Bills;
