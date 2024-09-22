import PurchaseOrder from "./PurchaseOrder";
import PurchaseReceive from "./PurchaseReceive";
import React from "react";

function Purchase() {
    const [activeTab, setActiveTab] = React.useState('PurchaseOrder');

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-200 p-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="border-b border-gray-300">
                    <nav className="flex space-x-6">
                        <button 
                            onClick={() => setActiveTab('PurchaseOrder')} 
                            className={`flex-1 py-3 text-sm font-semibold text-center transition duration-200 ${activeTab === 'PurchaseOrder' ? 'bg-blue-500 text-white' : 'bg-transparent text-blue-600 hover:bg-blue-100'}`}
                        >
                            Purchase Order
                        </button>
                        <button 
                            onClick={() => setActiveTab('PurchaseReceive')} 
                            className={`flex-1 py-3 text-sm font-semibold text-center transition duration-200 ${activeTab === 'PurchaseReceive' ? 'bg-blue-500 text-white' : 'bg-transparent text-blue-600 hover:bg-blue-100'}`}
                        >
                            Purchase Receive
                        </button>
                    </nav>
                </div>
                <div className="p-6">
                    {activeTab === 'PurchaseOrder' && <PurchaseOrder />}
                    {activeTab === 'PurchaseReceive' && <PurchaseReceive />}
                </div>
            </div>
        </div>
    );
}

export default Purchase;
