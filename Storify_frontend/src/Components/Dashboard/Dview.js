import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PurchaseReceive from './PurchaseReceive';
import Purchase from './Purchase.js'
import Bills from './Bills.js'
import ExpenseForm from './Expenses.js';
import Items from './Item.js';
import Inventory_adjustment from './Inventory_adjustment.js';
import Packages from './Sales/Packages.js'
import Invoice from './Sales/Invoice.js'
import Payment from './Sales/Payment.js'
import Sale_order from './Sales/Sale_order.js'
import PurchaseOrder from './PurchaseOrder.js';
import Inventory_merge from './Inventory_merge.js';
import Sales_merge from './Sales_merge.js';
import Purchase_merge from './Purchase_merge.js';
import Item_form from './Item_form.js';
import Item_group from './Item_group.js';
import Composite from './Composite.js';
import Price_Form from './Price_Form.js';
import PriceListsPage from './Price_List.js';
import Dropdown_order from './Sales/Dropdown_order.js';
import Sale_form from './Sales/Sale_form.js';
import Invoice_form from './Sales/Invoice_form.js';
import Dropdown_invoice from './Sales/Dropdown_invoice.js';
import Package_form from './Sales/Package_form.js';
import Payment_form from './Sales/Payment_form.js';
import Returnable_items from './Returnable_items.js';
import Nonreturn from './Nonreturn.js';
import Active_items from './Active_items.js';
import DashboardMainView from './DashboardMainView.js';

const DView = () => {
    return (
        <div className="flex-grow bg-slate-500 dark:bg-slate-900">
            <Routes>
                <Route path="/purchase_orders" element={<PurchaseOrder />} />
                <Route path="/expenses" element={<ExpenseForm />} />
                <Route path="/purchase_recieved" element={<PurchaseReceive />} />
                <Route path="/purchases" element={<Purchase />} />
                <Route path="/bills" element={<Bills />} />
                <Route path="/item" element={<Items />} />
                <Route path="/adjustment" element={<Inventory_adjustment />} />
                <Route path="/sales_orders" element={<Sale_order />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/payments" element={<Payment />} />
                <Route path="/inventory_merge" element={<Inventory_merge />} />
                <Route path="/sales_merge" element={<Sales_merge />} />
                <Route path="/purchase_merge" element={<Purchase_merge />} />
                <Route path="/items" element={<Items />} />
                <Route path="/Inventory_adjustement" element={<Inventory_adjustment />} />
                <Route path="/Item_group" element={<Item_group />} />
                <Route path="/Item_form" element={<Item_form />} />
                <Route path="/Price_List" element={<PriceListsPage />} />
                <Route path="/Price_Form" element={<Price_Form />} />
                <Route path="/Composite" element={<Composite />} />
                <Route path="/dorder" element={<Dropdown_order />} />
                <Route path="/sale_form" element={<Sale_form />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/invoice_form" element={<Invoice_form />} />
                <Route path="/dinvoice" element={<Dropdown_invoice />} />
                <Route path="/package_form" element={<Package_form />} />
                <Route path="/payment_form" element={<Payment_form />} />
                <Route path="/active_items" element={<Active_items />} />
                <Route path="/returnable_items" element={<Returnable_items />} />
                <Route path="/nonreturnable_items" element={<Nonreturn />} />

                <Route path="/dashboardmainview" element={<DashboardMainView />} />
                <Route path="/inventory" element={<ExpenseForm />} />
                <Route path="/sales" element={<Purchase />} />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/report" element={<Bills />} />
            </Routes>
        </div>
    );
};

export default DView;

