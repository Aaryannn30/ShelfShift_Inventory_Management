import React, { useState } from 'react';
import { FaPlus, FaTrash, FaSearch, FaTimes } from 'react-icons/fa';

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
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            vendorName: '',
            purchaseOrder: '',
            purchaseReceive: '',
            receivedDate: '',
            items: [{ item: '', description: '', ordered: '', received: '', inTransit: '', quantityToReceive: '' }]
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="flex justify-between items-center p-6 bg-white shadow-md">
                <h1 className="text-2xl font-bold">Purchase Receives</h1>
                <button onClick={() => setShowModal(true)} className="flex items-center px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
                    <FaPlus className="mr-2" /> New Receive
                </button>
            </header>
            <main className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600">
                                <th className="px-4 py-2">DATE</th>
                                <th className="px-4 py-2">PURCHASE RECEIVE#</th>
                                <th className="px-4 py-2">PURCHASE ORDER#</th>
                                <th className="px-4 py-2">VENDOR NAME</th>
                                <th className="px-4 py-2">STATUS</th>
                                <th className="px-4 py-2">BILLED</th>
                                <th className="px-4 py-2">QUANTITY</th>
                                <th className="px-4 py-2"><FaSearch /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchaseReceives.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className="text-center py-4 text-gray-500">No Purchase Receives to display!</td>
                                </tr>
                            ) : (
                                purchaseReceives.map((receive, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-2">{receive.receivedDate}</td>
                                        <td className="px-4 py-2">{receive.purchaseReceive}</td>
                                        <td className="px-4 py-2">{receive.purchaseOrder}</td>
                                        <td className="px-4 py-2">{receive.vendorName}</td>
                                        <td className="px-4 py-2">Received</td>
                                        <td className="px-4 py-2">Yes</td>
                                        <td className="px-4 py-2">
                                            {receive.items.reduce((acc, item) => acc + parseInt(item.quantityToReceive || 0), 0)}
                                        </td>
                                        <td className="px-4 py-2"><FaSearch /></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </main>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-3/4 md:w-1/2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">New Purchase Receive</h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-800">
                                <FaTimes />
                            </button>
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Vendor Name</label>
                            <input
                                type="text"
                                name="vendorName"
                                value={formData.vendorName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded mt-1"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Purchase Order</label>
                            <input
                                type="text"
                                name="purchaseOrder"
                                value={formData.purchaseOrder}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded mt-1"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Purchase Receive</label>
                            <input
                                type="text"
                                name="purchaseReceive"
                                value={formData.purchaseReceive}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded mt-1"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Received Date</label>
                            <input
                                type="date"
                                name="receivedDate"
                                value={formData.receivedDate}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded mt-1"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Items</label>
                            <div className="max-h-48 overflow-y-auto">
                                <table className="min-w-full bg-gray-100 mt-2">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="px-4 py-2">Item</th>
                                            <th className="px-4 py-2">Description</th>
                                            <th className="px-4 py-2">Ordered</th>
                                            <th className="px-4 py-2">Received</th>
                                            <th className="px-4 py-2">In Transit</th>
                                            <th className="px-4 py-2">Quantity to Receive</th>
                                            <th className="px-4 py-2">Actions</th>
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
                                                        className="w-full px-2 py-1 border rounded"
                                                    />
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <input
                                                        type="text"
                                                        value={item.description}
                                                        onChange={(e) => handleInputChange(e, index, 'description')}
                                                        className="w-full px-2 py-1 border rounded"
                                                    />
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <input
                                                        type="number"
                                                        value={item.ordered}
                                                        onChange={(e) => handleInputChange(e, index, 'ordered')}
                                                        className="w-full px-2 py-1 border rounded"
                                                    />
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <input
                                                        type="number"
                                                        value={item.received}
                                                        onChange={(e) => handleInputChange(e, index, 'received')}
                                                        className="w-full px-2 py-1 border rounded"
                                                    />
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <input
                                                        type="number"
                                                        value={item.inTransit}
                                                        onChange={(e) => handleInputChange(e, index, 'inTransit')}
                                                        className="w-full px-2 py-1 border rounded"
                                                    />
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <input
                                                        type="number"
                                                        value={item.quantityToReceive}
                                                        onChange={(e) => handleInputChange(e, index, 'quantityToReceive')}
                                                        className="w-full px-2 py-1 border rounded"
                                                    />
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <button onClick={() => removeItemRow(index)} className="text-red-500">
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button onClick={addItemRow} className="mt-2 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition duration-300">
                                Add Item
                            </button>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
                            <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Save as Received</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PurchaseReceive;
