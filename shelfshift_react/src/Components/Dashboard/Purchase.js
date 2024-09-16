
import PurchaseOrder from "./PurchaseOrder";
import PurchaseReceive from "./PurchaseReceive";
import React from "react";

function Purchase() {
    const [activeTab, setActiveTab] = React.useState('PurchaseOrder');

    return (
        <div className="dark:bg-gray-800 dark:text-white">
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-4">
                    <button 
                        onClick={() => setActiveTab('PurchaseOrder')} 
                        className={`px-4 py-2 text-sm font-medium ${activeTab === 'PurchaseOrder' ? 'text-black dark:text-white border-b-2 border-blue-500' : 'text-blue-500 dark:text-blue-400'}`}
                    >
                        Purchase Order
                    </button>
                    <button 
                        onClick={() => setActiveTab('PurchaseReceive')} 
                        className={`px-4 py-2 text-sm font-medium ${activeTab === 'PurchaseReceive' ? 'text-black dark:text-white border-b-2 border-blue-500' : 'text-blue-500 dark:text-blue-400'}`}
                    >
                        Purchase Receive
                    </button>
                </nav>
            </div>
            <div className="p-4">
                {activeTab === 'PurchaseOrder' && <PurchaseOrder />}
                {activeTab === 'PurchaseReceive' && <PurchaseReceive />}
            </div>
        </div>
    );
}

export default Purchase;


