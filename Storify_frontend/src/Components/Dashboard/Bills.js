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
        <div className="p-4 dark:bg-gray-900 dark:text-white">
            <div className="flex items-center mb-4 ml-9">            
                <FaMoneyBillWave className="dark:text-white"/>
                <h1 className="text-2xl font-semibold dark:text-white">&nbsp;&nbsp;New Bill</h1>
            </div>
            <div className="shadow-md rounded p-6 bg-white dark:bg-gray-800">
                <div className="mb-4">
                    <label className="block text-red-500 font-bold mb-1">Vendor Name*</label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Search Vendor"
                            value={vendorSearch}
                            onChange={(e) => setVendorSearch(e.target.value)}
                        />
                        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                            <FaSearch />
                        </button>
                    </div>
                    {vendorSearch && (
                        <ul className="mt-2 border rounded bg-white dark:bg-gray-700">
                            {filteredVendors.map((vendor, index) => (
                                <li
                                    key={index}
                                    className="py-2 px-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
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
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-red-500 font-bold mb-1">Bill#*</label>
                        <input
                            type="text"
                            className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={billNumber}
                            onChange={(e) => setBillNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 font-bold mb-1">Order Number</label>
                        <input
                            type="text"
                            className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-red-500 font-bold mb-1">Bill Date*</label>
                        <DatePicker
                            value={billDate}
                            onChange={(date) => setBillDate(date)}
                            options={{ dateFormat: "d/m/Y" }}
                            placeholder="dd/MM/yyyy"
                            className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 font-bold mb-1">Due Date</label>
                        <DatePicker
                            value={dueDate}
                            onChange={(date) => setDueDate(date)}
                            options={{ dateFormat: "d/m/Y" }}
                            className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-400 font-bold mb-1">Payment Terms</label>
                        <select
                            className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    <label className="block text-gray-400 font-bold mb-1">Subject <i className="fas fa-info-circle text-gray-400"></i></label>
                    <input
                        type="text"
                        placeholder="Enter a subject within 250 characters"
                        className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="my-6 ml-2 flex items-center">
                <FaTable className="text-lg dark:text-white text-black"/>
                <h2 className="text-gray-800 dark:text-gray-200 font-semibold text-xl">&nbsp;&nbsp;Item Table</h2>
            </div>
            <div className="shadow-md rounded p-6 bg-white dark:bg-gray-800">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-700 dark:text-gray-300">ITEM DETAILS</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-700 dark:text-gray-300">ACCOUNT</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-700 dark:text-gray-300">QUANTITY</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-700 dark:text-gray-300">RATE</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-700 dark:text-gray-300">DISCOUNT</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-700 dark:text-gray-300">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 dark:border-gray-700 p-3">
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                                        placeholder="Type or click to select an item."
                                        value={item.details}
                                        onChange={(e) => handleInputChange(index, 'details', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 dark:border-gray-700 p-3">
                                    <select
                                        className="w-full border rounded p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                                        value={item.account}
                                        onChange={(e) => handleInputChange(index, 'account', e.target.value)}
                                    >
                                        <option>Select an account</option>
                                    </select>
                                </td>
                                <td className="border border-gray-300 dark:border-gray-700 p-3">
                                    <input
                                        type="number"
                                        className="w-full border rounded p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                                        value={item.quantity}
                                        onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 dark:border-gray-700 p-3">
                                    <input
                                        type="number"
                                        className="w-full border rounded p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                                        value={item.rate}
                                        onChange={(e) => handleInputChange(index, 'rate', e.target.value)}
                                    />
                                </td>
                                <td className="border border-gray-300 dark:border-gray-700 p-3">
                                    <div className="flex items-center">
                                        <input
                                            type="number"
                                            className="w-full border rounded p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                                            value={item.discount}
                                            onChange={(e) => handleInputChange(index, 'discount', e.target.value)}
                                        />
                                        <span className="ml-2 text-gray-700 dark:text-gray-300">%</span>
                                    </div>
                                </td>
                                <td className="border border-gray-300 dark:border-gray-700 p-3">
                                    <input
                                        type="number"
                                        className="w-full border rounded p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                                        value={item.amount}
                                        readOnly
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex space-x-4 mb-6">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded shadow flex items-center" onClick={handleAddRow}>
                        <FaPlus className="mr-2" /> Add New Row
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded shadow flex items-center">
                        <FaPlus className="mr-2" /> Add Items in Bulk
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-start my-6">
                <div className="w-1/2 pr-4">
                    <label className="text-gray-700 dark:text-gray-300 font-medium">Customer Notes</label>
                    <textarea
                        className="w-full border rounded p-3 mt-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                        placeholder="Will be displayed on purchase order"
                        value={customerNotes}
                        onChange={(e) => setCustomerNotes(e.target.value)}
                    ></textarea>
                </div>
                <div className="w-1/2 pl-4">
                    <div className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-800 shadow-inner">
                        <div className="mb-4">
                            <h2 className="text-gray-800 dark:text-gray-200 font-semibold text-lg">Sub Total</h2>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="tax"
                                    value="TDS"
                                    checked={taxType === 'TDS'}
                                    onChange={() => setTaxType('TDS')}
                                />
                                <span className="text-gray-700 dark:text-gray-300">TDS</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="tax"
                                    value="TCS"
                                    checked={taxType === 'TCS'}
                                    onChange={() => setTaxType('TCS')}
                                />
                                <span className="text-gray-700 dark:text-gray-300">TCS</span>
                            </label>
                            <select
                                className="border rounded p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                                value={selectedTax}
                                onChange={(e) => setSelectedTax(e.target.value)}
                            >
                                <option value="">Select a Tax</option>
                                <option value="GST">GST</option>
                                <option value="CGST">CGST</option>
                                <option value="SGST">SGST</option>
                                <option value="IGST">IGST</option>
                                <option value="UTGST">UTGST</option>
                                <option value="CESS">CESS</option>
                                <option value="VAT">VAT</option>
                                <option value="Service Tax">Service Tax</option>
                                <option value="Excise Duty">Excise Duty</option>
                                <option value="Custom Duty">Custom Duty</option>
                                <option value="Octroi">Octroi</option>
                                <option value="Entry Tax">Entry Tax</option>
                                <option value="Professional Tax">Professional Tax</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <label className="text-gray-700 dark:text-gray-300">Adjustment</label>
                            <input
                                type="text"
                                className="border rounded p-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                                value={adjustment}
                                onChange={(e) => setAdjustment(e.target.value)}
                            />
                            <FaQuestionCircle className="text-gray-700 dark:text-gray-300" />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700 dark:text-gray-300">Total</span>
                            <span className="text-gray-700 dark:text-gray-300">{calculateTotal()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-start">
                <div className="w-1/2 pr-4">
                    <label className="text-gray-700 dark:text-gray-300 font-medium">Terms & Conditions</label>
                    <textarea
                        className="w-full border rounded p-3 mt-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                        placeholder="Enter the terms and conditions of your business to be displayed in your transaction"
                        value={terms}
                        onChange={(e) => setTerms(e.target.value)}
                    ></textarea>
                </div>
                <div className="w-1/2 pl-4">
                    <label className="text-gray-700 dark:text-gray-300 font-medium">Attach File(s) to Purchase Order</label>
                    <div className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-800 shadow-inner mt-2">
                        <label className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded shadow flex items-center cursor-pointer">
                            <FaUpload className="mr-2" /> Upload File
                            <input type="file" multiple className="hidden" onChange={handleFileChange} />
                        </label>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">You can upload a maximum of 10 files, 10MB each</p>
                        <ul className="mt-2">
                            {files.map((file, index) => (
                                <li key={index} className="text-gray-700 dark:text-gray-300 text-sm">{file.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="space-x-4 p-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                    Save
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Save and New
                </button>
                <button className="bg-gray-500 text-white py-2 px-4 rounded-lg">
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default Bills;
