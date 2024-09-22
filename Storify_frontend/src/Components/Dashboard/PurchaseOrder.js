import React, { useState } from 'react';
import { FaQuestionCircle, FaPlus, FaUpload } from 'react-icons/fa';

function PurchaseOrder() {
    const [items, setItems] = useState([{ details: '', account: '', quantity: 1, rate: 0, discount: 0, amount: 0 }]);
    const [taxType, setTaxType] = useState('TDS');
    const [selectedTax, setSelectedTax] = useState('');
    const [adjustment, setAdjustment] = useState('');
    const [customerNotes, setCustomerNotes] = useState('');
    const [terms, setTerms] = useState('');
    const [files, setFiles] = useState([]);

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
            <div className="border rounded-lg p-6 bg-white shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Purchase Order</h2>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Item Table</h3>
                    <table className="w-full border-collapse border border-gray-300 mb-6">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">ITEM DETAILS</th>
                                <th className="border p-3 text-left">ACCOUNT</th>
                                <th className="border p-3 text-left">QUANTITY</th>
                                <th className="border p-3 text-left">RATE</th>
                                <th className="border p-3 text-left">DISCOUNT (%)</th>
                                <th className="border p-3 text-left">AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border p-3">
                                        <input
                                            type="text"
                                            className="w-full border rounded p-2"
                                            placeholder="Type or click to select an item."
                                            value={item.details}
                                            onChange={(e) => handleInputChange(index, 'details', e.target.value)}
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <select
                                            className="w-full border rounded p-2"
                                            value={item.account}
                                            onChange={(e) => handleInputChange(index, 'account', e.target.value)}
                                        >
                                            <option>Select an account</option>
                                            {/* Add account options here */}
                                        </select>
                                    </td>
                                    <td className="border p-3">
                                        <input
                                            type="number"
                                            className="w-full border rounded p-2"
                                            value={item.quantity}
                                            onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <input
                                            type="number"
                                            className="w-full border rounded p-2"
                                            value={item.rate}
                                            onChange={(e) => handleInputChange(index, 'rate', e.target.value)}
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <input
                                            type="number"
                                            className="w-full border rounded p-2"
                                            value={item.discount}
                                            onChange={(e) => handleInputChange(index, 'discount', e.target.value)}
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <input
                                            type="number"
                                            className="w-full border rounded p-2"
                                            value={item.amount}
                                            readOnly
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex space-x-4 mb-6">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow flex items-center" onClick={handleAddRow}>
                            <FaPlus className="mr-2" /> Add New Row
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow flex items-center">
                            <FaPlus className="mr-2" /> Add Items in Bulk
                        </button>
                    </div>
                </div>
                <div className="flex mb-6">
                    <div className="w-1/2 pr-4">
                        <label className="block text-gray-700 font-medium mb-2">Customer Notes</label>
                        <textarea
                            className="w-full border rounded p-3 bg-white"
                            placeholder="Will be displayed on purchase order"
                            value={customerNotes}
                            onChange={(e) => setCustomerNotes(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="w-1/2 pl-4">
                        <div className="border rounded-lg p-4 bg-gray-100 shadow-inner">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Summary</h3>
                            <div className="flex justify-between mb-2">
                                <span>Sub Total:</span>
                                <span>{calculateTotal()}</span>
                            </div>
                            <div className="flex mb-2">
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        name="tax"
                                        value="TDS"
                                        checked={taxType === 'TDS'}
                                        onChange={() => setTaxType('TDS')}
                                    />
                                    <span className="ml-2">TDS</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="tax"
                                        value="TCS"
                                        checked={taxType === 'TCS'}
                                        onChange={() => setTaxType('TCS')}
                                    />
                                    <span className="ml-2">TCS</span>
                                </label>
                            </div>
                            <select
                                className="border rounded p-2 w-full mb-2"
                                value={selectedTax}
                                onChange={(e) => setSelectedTax(e.target.value)}
                            >
                                <option value="">Select a Tax</option>
                                {/* Add tax options here */}
                            </select>
                            <div className="flex items-center mb-2">
                                <span className="mr-2">Adjustment:</span>
                                <input
                                    type="text"
                                    className="border rounded p-2"
                                    value={adjustment}
                                    onChange={(e) => setAdjustment(e.target.value)}
                                />
                                <FaQuestionCircle className="text-gray-500 ml-2" />
                            </div>
                            <div className="flex justify-between">
                                <span>Total:</span>
                                <span>{calculateTotal()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mb-6">
                    <div className="w-1/2 pr-4">
                        <label className="block text-gray-700 font-medium mb-2">Terms & Conditions</label>
                        <textarea
                            className="w-full border rounded p-3"
                            placeholder="Enter the terms and conditions of your business to be displayed in your transaction"
                            value={terms}
                            onChange={(e) => setTerms(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="w-1/2 pl-4">
                        <label className="block text-gray-700 font-medium mb-2">Attach File(s)</label>
                        <div className="border rounded-lg p-4 bg-gray-100 shadow-inner">
                            <label className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow flex items-center cursor-pointer">
                                <FaUpload className="mr-2" /> Upload File
                                <input type="file" multiple className="hidden" onChange={handleFileChange} />
                            </label>
                            <p className="text-sm text-gray-500 mt-2">You can upload a maximum of 10 files, 10MB each</p>
                            <ul className="mt-2">
                                {files.map((file, index) => (
                                    <li key={index} className="text-sm text-gray-700">{file.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end space-x-4">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Save</button>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Save and New</button>
                    <button className="bg-gray-400 text-white py-2 px-4 rounded-lg">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default PurchaseOrder;
