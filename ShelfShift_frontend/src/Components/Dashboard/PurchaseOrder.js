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
        <div className="min-h-screen bg-gradient-to-br dark:bg-[#030637] p-8">
            <div className="border rounded-lg p-6 bg-white dark:bg-[#17153B] shadow-lg">
                <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-6">Purchase Order</h2>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">Item Table</h3>
                    <table className="w-full border-collapse border border-gray-300 mb-6">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-[#1E1E2F]">
                                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">ITEM DETAILS</th>
                                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">ACCOUNT</th>
                                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">QUANTITY</th>
                                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">RATE</th>
                                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">DISCOUNT (%)</th>
                                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index} className="border border-gray-300 p-3">
                                    <td className="border p-3">
                                        <input
                                            type="text"
                                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                            placeholder="Type or click to select an item."
                                            value={item.details}
                                            onChange={(e) => handleInputChange(index, 'details', e.target.value)}
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <select
                                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
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
                                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                            value={item.quantity}
                                            onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <input
                                            type="number"
                                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                            value={item.rate}
                                            onChange={(e) => handleInputChange(index, 'rate', e.target.value)}
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <input
                                            type="number"
                                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                            value={item.discount}
                                            onChange={(e) => handleInputChange(index, 'discount', e.target.value)}
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <input
                                            type="number"
                                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
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
                        <label className="block text-blue-700 dark:text-blue-300 font-medium mb-2">Customer Notes</label>
                        <textarea
                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                            placeholder="Will be displayed on purchase order"
                            value={customerNotes}
                            onChange={(e) => setCustomerNotes(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="w-1/2 pl-4">
                        <div className="border rounded-lg p-4 dark:bg-[#030637] shadow-inner">
                            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Summary</h3>
                            <div className="flex justify-between mb-2 text-blue-700 dark:text-blue-300">
                                <span>Sub Total:</span>
                                <span>{calculateTotal()}</span>
                            </div>
                            <div className="flex mb-2">
                                <label className="flex items-center mr-4 text-blue-700 dark:text-blue-300">
                                    <input
                                        type="radio"
                                        name="tax"
                                        value="TDS"
                                        className='p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white'
                                        checked={taxType === 'TDS'}
                                        onChange={() => setTaxType('TDS')}
                                    />
                                    <span className="ml-2">TDS</span>
                                </label>
                                <label className="flex items-center text-blue-700 dark:text-blue-300">
                                    <input
                                    className='p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white'
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
                                className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                value={selectedTax}
                                onChange={(e) => setSelectedTax(e.target.value)}
                            >
                                <option value="" className='text-blue-700 dark:text-blue-300'>Select a Tax</option>
                                {/* Add tax options here */}
                            </select>
                            <div className="flex items-center mb-2 mt-3">
                                <span className="mr-2 text-blue-700 dark:text-blue-300">Adjustment:</span>
                                <input
                                    type="text"
                                    className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                                    value={adjustment}
                                    onChange={(e) => setAdjustment(e.target.value)}
                                />
                                <FaQuestionCircle className="text-gray-500 ml-2" />
                            </div>
                            <div className="flex justify-between text-blue-700 dark:text-blue-300">
                                <span>Total:</span>
                                <span>{calculateTotal()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mb-6">
                    <div className="w-1/2 pr-4">
                        <label className="block text-blue-700 dark:text-blue-300 font-medium mb-2">Terms & Conditions</label>
                        <textarea
                            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                            placeholder="Enter the terms and conditions of your business to be displayed in your transaction"
                            value={terms}
                            onChange={(e) => setTerms(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="w-1/2 pl-4 ">
                        <label className="block text-blue-700 dark:text-blue-300 font-medium mb-2 ">Attach File(s)</label>
                        <div className="border rounded-lg p-4 dark:bg-[#030637] shadow-inner">
                            <label className="dark:bg-[#030637]  text-blue-700 dark:text-blue-300 px-4 py-2 rounded shadow flex items-center cursor-pointer">
                                <FaUpload className="mr-2" /> Upload File
                                <input type="file" multiple className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" onChange={handleFileChange} />
                            </label>
                            <p className="text-sm text-gray-500 mt-2">You can upload a maximum of 10 files, 10MB each</p>
                            <ul className="mt-2">
                                {files.map((file, index) => (
                                    <li key={index} className="text-sm text-blue-700 dark:text-blue-300">{file.name}</li>
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
