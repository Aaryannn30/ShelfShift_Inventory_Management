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

    // Function to add a new row to the bulk expenses table
    const addExpenseRow = () => {
        setBulkExpenses([...bulkExpenses, {}]); // Add an empty object to the array
    };

    return (
        <div className="container mx-auto p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-colors duration-300">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {activeComponent === 'recordExpense' ? 'Record Expense' : 'Bulk Add Expenses'}
            </h1>
            <ul className="flex border-b border-gray-300 dark:border-gray-600">
                <li className="mr-1">
                    <a
                        className={`inline-block py-2 px-4 font-semibold ${activeComponent === 'recordExpense' ? 'text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300'}`}
                        href="#"
                        onClick={() => setActiveComponent('recordExpense')}
                    >
                        Record Expense
                    </a>
                </li>
                <li className="mr-1">
                    <a
                        className={`inline-block py-2 px-4 font-semibold ${activeComponent === 'bulkAddExpenses' ? 'text-blue-500 border-b-2 border-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300'}`}
                        href="#"
                        onClick={() => setActiveComponent('bulkAddExpenses')}
                    >
                        Bulk Add Expenses
                    </a>
                </li>                
            </ul>

            {activeComponent === 'recordExpense' ? (
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    <div className="flex space-x-6">
                        <div className="w-1/2">
                            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Date*</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                className="border rounded-lg w-full py-2 px-3 dark:bg-gray-700 dark:text-gray-300"
                            />
                        </div>

                        <div className="w-1/2">
                            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Category Name*</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="border rounded-lg w-full py-2 px-3 dark:bg-gray-700 dark:text-gray-300"
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
                            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Amount*</label>
                            <div className="flex">
                                <select
                                    name="currency"
                                    className="border rounded-l-lg py-2 px-3 dark:bg-gray-700 dark:text-gray-300"
                                    value="INR"
                                >
                                    <option value="INR">INR</option>
                                </select>
                                <input
                                    type="text"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    className="border rounded-r-lg w-full py-2 px-3 dark:bg-gray-700 dark:text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="w-1/2">
                            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Vendor</label>
                            <input
                                type="text"
                                name="vendor"
                                value={formData.vendor}
                                onChange={handleInputChange}
                                className="border rounded-lg w-full py-2 px-3 dark:bg-gray-700 dark:text-gray-300"
                                placeholder="Vendor"
                            />
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <div className="w-1/2">
                            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Invoice#</label>
                            <input
                                type="text"
                                name="invoice"
                                value={formData.invoice}
                                onChange={handleInputChange}
                                className="border rounded-lg w-full py-2 px-3 dark:bg-gray-700 dark:text-gray-300"
                                placeholder="Invoice#"
                            />
                        </div>

                        <div className="w-1/2">
                            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Notes</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleInputChange}
                                className="border rounded-lg w-full py-2 px-3 dark:bg-gray-700 dark:text-gray-300"
                                placeholder="Max. 500 characters"
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <div className="w-1/2">
                            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Customer Name</label>
                            <input
                                type="text"
                                name="customer"
                                value={formData.customer}
                                onChange={handleInputChange}
                                className="border rounded-lg w-full py-2 px-3 dark:bg-gray-700 dark:text-gray-300"
                                placeholder="Select or add a customer"
                            />
                        </div>

                        <div className="w-1/2 flex flex-col justify-center items-center border-2 border-dashed rounded-lg py-8 dark:border-gray-600">
                            <div className="text-center">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Upload"
                                    className="mx-auto mb-3"
                                />
                                <p className="text-gray-500 dark:text-gray-300">Drag or Drop your Receipts</p>
                                <p className="text-gray-500 dark:text-gray-300 text-sm">Maximum file size allowed is 10MB</p >
                                <input type="file" className="hidden" id="fileUpload" onChange={handleFileChange} />
                                <label
                                    htmlFor="fileUpload"
                                    className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer"
                                >
                                    Upload your Files
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-4">
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
                </form>
            ) : (
                <div className="p-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white dark:bg-gray-800 dark:text-gray-300">
                            <thead>
                                <tr className="w-full bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                    <th className="px-4 py-2"><i className="fas fa-receipt"></i></th>
                                    <th className="px-4 py-2">DATE*</th>
                                    <th className="px-4 py-2">CATEGORY NAME*</th>
                                    <th className="px-4 py-2">AMOUNT*</th>
                                    <th className="px-4 py-2">VENDOR</th>
                                    <th className="px-4 py-2">CUSTOMER NAME</th>
                                    <th className="px-4 py-2">BILLABLE</th>
                                </tr>
                            </thead>
                            {bulkExpenses.map((expense, index) => (
                                <tbody key={index}>
                                    {[...Array(7)].map((_, rowIndex) => (
                                        <tr key={`${index}-${rowIndex}`} className="border-b border-gray-300 dark:border-gray-600">
                                            <td className="px-4 py-2"><i className="fas fa-receipt"></i></td>
                                            <td className="px-4 py-2">
                                                <input type="date" className="w-full border rounded px-2 py-1 dark:bg-gray-700 dark:text-gray-300" />
                                            </td>
                                            <td className="px-4 py-2">
                                                <select className="w-full border rounded px-2 py-1 dark:bg-gray-700 dark:text-gray-300">
                                                    <option>Select an account</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2 flex">
                                                <select className="border rounded-l px-2 py-1 dark:bg-gray-700 dark:text-gray-300">
                                                    <option>INR</option>
                                                </select>
                                                <input type="text" className="w-full border rounded-r px-2 py-1 dark:bg-gray-700 dark:text-gray-300" />
                                            </td>
                                            <td className="px-4 py-2">
                                                <select className="w-full border rounded px-2 py-1 dark:bg-gray-700 dark:text-gray-300">
                                                    <option></option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                                <select className="w-full border rounded px-2 py-1 dark:bg-gray-700 dark:text-gray-300">
                                                    <option></option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2 text-center">
                                                <input type="checkbox" className="dark:bg-gray-700 dark:border-gray-600" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            ))}


                        </table>
                    </div>
                    <div className="mt-4">
                        <button
                            onClick={addExpenseRow}
                            className="text-blue-500 hover:underline dark:text-blue-400"
                        >
                            + Add More Expenses
                        </button>
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
            )}
        </div>
    );
};

export default ExpenseForm;
