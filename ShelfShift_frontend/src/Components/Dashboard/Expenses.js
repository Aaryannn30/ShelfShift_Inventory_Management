import React, { useState } from 'react';

const ExpenseForm = () => {
    const [formData, setFormData] = useState({
        date: '2024-09-15',
        category: '',
        amount: '',
        vendor: '',
        invoice: '',
        notes: '',
        customer: '',
        file: null,
    });

    const [activeComponent, setActiveComponent] = useState('recordExpense');
    const [bulkExpenses, setBulkExpenses] = useState([{}]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            file: file,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit form data
    };

    const addExpenseRow = () => {
        setBulkExpenses([...bulkExpenses, {}]);
    };

    return (
        <div className="container mx-auto p-8 dark:bg-[#030637] shadow-xl rounded-lg transition-colors duration-300">
            <h1 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 dark:bg-[#17153B]">
                {activeComponent === 'recordExpense' ? 'Record Expense' : 'Bulk Add Expenses'}
            </h1>
            <ul className="flex border-b border-gray-400 dark:bg-[#17153B]">
                <li className="mr-1 p-2">
                    <a
                        className={`inline-block py-2 px-4 font-semibold ${activeComponent === 'recordExpense' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                        href="#"
                        onClick={() => setActiveComponent('recordExpense')}
                    >
                        Record Expense
                    </a>
                </li>
                <li className="mr-1 p-2">
                    <a
                        className={`inline-block py-2 px-4 font-semibold ${activeComponent === 'bulkAddExpenses' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                        href="#"
                        onClick={() => setActiveComponent('bulkAddExpenses')}
                    >
                        Bulk Add Expenses
                    </a>
                </li>                
            </ul>

            {activeComponent === 'recordExpense' ? (
                <form onSubmit={handleSubmit} className="space-y-6 mt-6 p-3 dark:bg-[#17153B]">
                    <div className="flex space-x-6">
                        <div className="w-1/2">
                            <label className="block text-blue-600 dark:text-blue-400 font-semibold mb-2">Date*</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                className="border  border-[#B9B4C7]  dark:border-[#910A67] rounded-lg w-full py-2 px-3 dark:text-white dark:bg-[#030637] text-gray-800"
                            />
                        </div>

                        <div className="w-1/2">
                            <label className="block text-blue-600 dark:text-blue-400 font-semibold mb-2">Category Name*</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="border border-[#B9B4C7]  dark:border-[#910A67] rounded-lg w-full py-2 px-3 dark:text-white dark:bg-[#030637] text-gray-800"
                            >
                                <option value="">Select Category</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                <option value="category3">Category 3</option>
                            </select>
                            <div className="mt-2 text-blue-500 cursor-pointer">
                                <i className="fas fa-align-justify"></i> Itemize
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <div className="w-1/2">
                            <label className="block text-blue-600 dark:text-blue-400 font-semibold mb-2">Amount*</label>
                            <div className="flex">
                                <select
                                    name="currency"
                                    className="border border-[#B9B4C7]  dark:border-[#910A67] rounded-l-lg py-2 px-3 dark:text-white dark:bg-[#030637] text-gray-800"
                                    value="INR"
                                >
                                    <option value="INR">INR</option>
                                </select>
                                <input
                                    type="text"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    className="border border-[#B9B4C7]  dark:border-[#910A67] rounded-r-lg w-full py-2 px-3 dark:text-white dark:bg-[#030637] text-gray-800"
                                />
                            </div>
                        </div>

                        <div className="w-1/2">
                            <label className="block text-blue-600 dark:text-blue-400 font-semibold mb-2">Vendor</label>
                            <input
                                type="text"
                                name="vendor"
                                value={formData.vendor}
                                onChange={handleInputChange}
                                className="border border-[#B9B4C7]  dark:border-[#910A67] rounded-lg w-full py-2 px-3 dark:text-white dark:bg-[#030637] text-gray-800"
                                placeholder="Vendor"
                            />
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <div className="w-1/2">
                            <label className="block text-blue-600 dark:text-blue-400 font-semibold mb-2">Invoice#</label>
                            <input
                                type="text"
                                name="invoice"
                                value={formData.invoice}
                                onChange={handleInputChange}
                                className="border border-[#B9B4C7]  dark:border-[#910A67] rounded-lg w-full py-2 px-3 dark:text-white dark:bg-[#030637] text-gray-800"
                                placeholder="Invoice#"
                            />
                        </div>

                        <div className="w-1/2">
                            <label className="block text-blue-600 dark:text-blue-400 font-semibold mb-2">Notes</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleInputChange}
                                className="border border-[#B9B4C7]  dark:border-[#910A67] rounded-lg w-full py-2 px-3 dark:text-white dark:bg-[#030637] text-gray-800"
                                placeholder="Max. 500 characters"
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <div className="w-1/2">
                            <label className="block text-blue-600 dark:text-blue-400 font-semibold mb-2">Customer Name</label>
                            <input
                                type="text"
                                name="customer"
                                value={formData.customer}
                                onChange={handleInputChange}
                                className="border border-[#B9B4C7]  dark:border-[#910A67] rounded-lg w-full py-2 px-3 dark:text-white dark:bg-[#030637] text-gray-800"
                                placeholder="Select or add a customer"
                            />
                        </div>

                        <div className="w-1/2 flex flex-col justify-center items-center border-2 border-dashed rounded-lg py-8 border-[#B9B4C7]  dark:border-[#910A67]">
                            <div className="text-center">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Upload"
                                    className="mx-auto mb-3"
                                />
                                <p className="text-gray-600">Drag or Drop your Receipts</p>
                                <p className="text-gray-600 text-sm">Maximum file size allowed is 10MB</p >
                                <input type="file" className="hidden" id="fileUpload" onChange={handleFileChange} />
                                <label
                                    htmlFor="fileUpload"
                                    className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer"
                                >
                                    Upload your Files
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Save
                        </button>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Save and New
                        </button>
                        <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div className="p-8 dark:bg-[#17153B]">
                    <div className="overflow-x-auto">
                        <table className="min-w-full dark:text-white dark:bg-[#030637] shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 text-left text-xs font-semibold uppercase tracking-wider">
                                    <th className="px-4 py-2"><i className="fas fa-receipt"></i></th>
                                    <th className="px-4 py-2">DATE*</th>
                                    <th className="px-4 py-2">CATEGORY NAME*</th>
                                    <th className="px-4 py-2">AMOUNT*</th>
                                    <th className="px-4 py-2">VENDOR</th>
                                    <th className="px-4 py-2">CUSTOMER NAME</th>
                                    <th className="px-4 py-2">BILLABLE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bulkExpenses.map((expense, index) => (
                                    <tr key={index} className="border-b border-[#B9B4C7]  dark:border-[#910A67]">
                                        <td className="px-4 py-2"><i className="fas fa-receipt"></i></td>
                                        <td className="px-4 py-2">
                                            <input type="date" className="w-full border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637]   dark:border-[#910A67] rounded px-2 py-1" />
                                        </td>
                                        <td className="px-4 py-2">
                                            <select className="w-full border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637]   dark:border-[#910A67] rounded px-2 py-1">
                                                <option>Select an account</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-2 flex">
                                            <select className="border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] rounded-l px-2 py-1">
                                                <option>INR</option>
                                            </select>
                                            <input type="text" className="w-full border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637]   dark:border-[#910A67] rounded-r px-2 py-1" />
                                        </td>
                                        <td className="px-4 py-2">
                                            <select className="w-full border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637]   dark:border-[#910A67] rounded px-2 py-1">
                                                <option>V1</option>
                                                <option>V2</option>
                                                <option>V3</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-2">
                                            <select className="w-full border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637]   dark:border-[#910A67] rounded px-2 py-1">
                                                <option>C1</option>
                                                <option>C2</option>
                                                <option>C3</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <input type="checkbox" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4">
                        <button
                            onClick={addExpenseRow}
                            className="text-blue-600 hover:underline"
                        >
                            + Add More Expenses
                        </button>
                    </div>
                    <div className="space-x-4 p-4">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            Save
                        </button>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Save and New
                        </button>
                        <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExpenseForm;
