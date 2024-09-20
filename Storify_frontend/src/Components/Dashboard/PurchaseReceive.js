import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PurchaseReceive() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        vendorName: '',
        purchaseOrder: '',
        purchaseReceive: '',
        receivedDate: '',
        items: [{ item: '', description: '', ordered: '', received: '', inTransit: '', quantityToReceive: '' }]
    });
    const [purchaseReceives, setPurchaseReceives] = useState([]);

    const handleInputChange = (e, index, field) => {
        const value = e.target.value;
        if (field) {
            const items = [...formData.items];
            items[index][field] = value;
            setFormData({ ...formData, items });
        } else {
            setFormData({ ...formData, [e.target.name]: value });
        }
    };

    const addItemRow = () => {
        setFormData({
            ...formData,
            items: [...formData.items, { item: '', description: '', ordered: '', received: '', inTransit: '', quantityToReceive: '' }]
        });
    };

    const removeItemRow = (index) => {
        const items = [...formData.items];
        items.splice(index, 1);
        setFormData({ ...formData, items });
    };

    const handleSubmit = () => {
        setPurchaseReceives([...purchaseReceives, formData]);
        setShowModal(false);
        setFormData({
            vendorName: '',
            purchaseOrder: '',
            purchaseReceive: '',
            receivedDate: '',
            items: [{ item: '', description: '', ordered: '', received: '', inTransit: '', quantityToReceive: '' }]
        });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-semibold">All Purchase Receives <i className="fas fa-chevron-down"></i></h1>
                <div className="flex items-center space-x-2">
                    <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded">+New</button>
                    <i className="fas fa-ellipsis-v text-gray-500 dark:text-gray-300"></i>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800">
                    <thead>
                        <tr className="w-full border-b border-gray-200 dark:border-gray-700">
                            <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-300">DATE</th>
                            <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-300">PURCHASE RECEIVE#</th>
                            <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-300">PURCHASE ORDER#</th>
                            <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-300">VENDOR NAME</th>
                            <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-300">STATUS</th>
                            <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-300">BILLED</th>
                            <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-300">QUANTITY</th>
                            <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-300"><i className="fas fa-search"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseReceives.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="text-center py-8 text-gray-500 dark:text-gray-300">No Purchase Receives to display!</td>
                            </tr>
                        ) : (
                            purchaseReceives.map((receive, index) => (
                                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="px-4 py-2">{receive.receivedDate}</td>
                                    <td className="px-4 py-2">{receive.purchaseReceive}</td>
                                    <td className="px-4 py-2">{receive.purchaseOrder}</td>
                                    <td className="px-4 py-2">{receive.vendorName}</td>
                                    <td className="px-4 py-2">Received</td>
                                    <td className="px-4 py-2">Yes</td>
                                    <td className="px-4 py-2">{receive.items.reduce((acc, item) => acc + parseInt(item.quantityToReceive || 0), 0)}</td>
                                    <td className="px-4 py-2"><i className="fas fa-search"></i></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg w-3/4">
                        <h2 className="text-xl font-semibold mb-4">New Purchase Receive</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Vendor Name</label>
                            <input
                                type="text"
                                name="vendorName"
                                value={formData.vendorName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Purchase Order</label>
                            <input
                                type="text"
                                name="purchaseOrder"
                                value={formData.purchaseOrder}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Purchase Receive</label>
                            <input
                                type="text"
                                name="purchaseReceive"
                                value={formData.purchaseReceive}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Received Date</label>
                            <input
                                type="date"
                                name="receivedDate"
                                value={formData.receivedDate}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Items</label>
                            <table className="min-w-full bg-gray-100 dark:bg-gray-700">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border text-gray-700 dark:text-gray-300">Item</th>
                                        <th className="px-4 py-2 border text-gray-700 dark:text-gray-300">Description</th>
                                        <th className="px-4 py-2 border text-gray-700 dark:text-gray-300">Ordered</th>
                                        <th className="px-4 py-2 border text-gray-700 dark:text-gray-300">Received</th>
                                        <th className="px-4 py-2 border text-gray-700 dark:text-gray-300">In Transit</th>
                                        <th className="px-4 py-2 border text-gray-700 dark:text-gray-300">Quantity to Receive</th>
                                        <th className="px-4 py-2 border text-gray-700 dark:text-gray-300">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.items.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2 border">
                                                <input
                                                    type="text"
                                                    value={item.item}
                                                    onChange={(e) => handleInputChange(e, index, 'item')}
                                                    className="w-full px-2 py-1 border rounded bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
                                                />
                                            </td>
                                            <td className="px-4 py-2 border">
                                                <input
                                                    type="text"
                                                    value={item.description}
                                                    onChange={(e) => handleInputChange(e, index, 'description')}
                                                    className="w-full px-2 py-1 border rounded bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
                                                />
                                            </td>
                                            <td className="px-4 py-2 border">
                                                <input
                                                    type="number"
                                                    value={item.ordered}
                                                    onChange={(e) => handleInputChange(e, index, 'ordered')}
                                                    className="w-full px-2 py-1 border rounded bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
                                                />
                                            </td>
                                            <td className="px-4 py-2 border">
                                                <input
                                                    type="number"
                                                    value={item.received}
                                                    onChange={(e) => handleInputChange(e, index, 'received')}
                                                    className="w-full px-2 py-1 border rounded bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
                                                />
                                            </td>
                                            <td className="px-4 py-2 border">
                                                <input
                                                    type="number"
                                                    value={item.inTransit}
                                                    onChange={(e) => handleInputChange(e, index, 'inTransit')}
                                                    className="w-full px-2 py-1 border rounded bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
                                                />
                                            </td>
                                            <td className="px-4 py-2 border">
                                                <input
                                                    type="number"
                                                    value={item.quantityToReceive}
                                                    onChange={(e) => handleInputChange(e, index, 'quantityToReceive')}
                                                    className="w-full px-2 py-1 border rounded bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
                                                />
                                            </td>
                                            <td className="px-4 py-2 border">
                                                <button onClick={() => removeItemRow(index)} className="text-red-500">Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={addItemRow} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add Item</button>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Save as Received</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PurchaseReceive;

