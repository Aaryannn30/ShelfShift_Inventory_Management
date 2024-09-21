import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Navbar from './Components/Home/Navbar';
import ShuffleHero from './Components/Home/ShuffleHero';
import MarqueeBg from './Components/Home/MarqueeBg';
import { ParallaxHero } from './Components/Home/ParallaxHero';
import Testimonial from './Components/Home/Testimonial';
import Footer from './Components/Home/Footer';
import Signin from './Components/Home/Signin';
import Signup from './Components/Home/Signup';
import PricingCard from './Components/Pages/PricingCard';
import Pricing from './Components/Pages/Pricing';
import DSidebar from './Components/Dashboard/DSidebar';
import Auth from './Components/Home/Auth';
import Items from './Components/Dashboard/Item';
import Inventory_adjustment from './Components/Dashboard/Inventory_adjustment';
import Item_group from './Components/Dashboard/Item_group';
import Item_form from './Components/Dashboard/Item_form';
import Price_List from './Components/Dashboard/Price_List';
import Price_Form from './Components/Dashboard/Price_Form';
import Composite from './Components/Dashboard/Composite';
import Profile from './Components/Dashboard/Profile';
import Question from './Components/Home/Question';
import FAQ from './Components/Home/FAQ';
import Contact from './Components/Home/Contact';
import Privacy_Policy from './Components/Home/Privacy_Policy';
import Terms_Condition from './Components/Home/Terms_Condition';
import PurchaseOrder from './Components/Dashboard/PurchaseOrder';
import PurchaseReceive from './Components/Dashboard/PurchaseReceive';
import ExpenseForm from './Components/Dashboard/Expenses';
import Bills from './Components/Dashboard/Bills';
import Purchase from './Components/Dashboard/Purchase';
import Sale_form from './Components/Dashboard/Sales/Sale_form';
import Sale_order from './Components/Dashboard/Sales/Sale_order';
import Sales_merge from './Components/Dashboard/Sales_merge';
import Package_form from './Components/Dashboard/Sales/Package_form';
import Packages from './Components/Dashboard/Sales/Packages';
import Invoice from './Components/Dashboard/Sales/Invoice';
import Payment from './Components/Dashboard/Sales/Payment';
import Payment_form from './Components/Dashboard/Sales/Payment_form';
import Purchase_merge from './Components/Dashboard/Purchase_merge';
import Inventory_merge from './Components/Dashboard/Inventory_merge';
import PriceListsPage from './Components/Dashboard/Price_List';
import Dropdown_order from './Components/Dashboard/Sales/Dropdown_order';
import Dropdown_invoice from './Components/Dashboard/Sales/Dropdown_invoice';
import Nonreturn from './Components/Dashboard/Nonreturn';
import DashboardMainView from './Components/Dashboard/DashboardMainView';
import Invoice_form from './Components/Dashboard/Sales/Invoice_form';
import Active_items from './Components/Dashboard/Active_items';
import Returnable_items from './Components/Dashboard/Returnable_items';
// import PurchaseOrder from './Components/Dashboard/PurchaseOrder';


// Set up Axios interceptor for auth token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Navbar scroll="true" />
              <MarqueeBg />
              <ShuffleHero />
              <ParallaxHero />
              {/* <Testimonial /> */}
              {/* <PricingCard /> */}
              <Footer />
            </>
          } />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/question" element={<Question />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy_policy" element={<Privacy_Policy />} />
          <Route path="/terms_condition" element={<Terms_Condition />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DSidebar />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard/purchase_orders" element={<PurchaseOrder />} />
                <Route path="/dashboard/expenses" element={<ExpenseForm />} />
                <Route path="/dashboard/purchase_recieved" element={<PurchaseReceive />} />
                <Route path="/dashboard/purchases" element={<Purchase />} />
                <Route path="/dashboard/bills" element={<Bills />} />
                <Route path="/dashboard/item" element={<Items />} />
                <Route path="/dashboard/adjustment" element={<Inventory_adjustment />} />
                <Route path="/dashboard/sales_orders" element={<Sale_order />} />
                <Route path="/dashboard/packages" element={<Packages />} />
                <Route path="/dashboard/invoice" element={<Invoice />} />
                <Route path="/dashboard/payments" element={<Payment />} />
                <Route path="/dashboard/inventory_merge" element={<Inventory_merge />} />
                <Route path="/dashboard/sales_merge" element={<Sales_merge />} />
                <Route path="/dashboard/purchase_merge" element={<Purchase_merge />} />
                <Route path="/dashboard/items" element={<Items />} />
                <Route path="/dashboard/Inventory_adjustement" element={<Inventory_adjustment />} />
                <Route path="/dashboard/Item_group" element={<Item_group />} />
                <Route path="/dashboard/Item_form" element={<Item_form />} />
                <Route path="/dashboard/Price_List" element={<PriceListsPage />} />
                <Route path="/dashboard/Price_Form" element={<Price_Form />} />
                <Route path="/dashboard/Composite" element={<Composite />} />
                <Route path="/dashboard/dorder" element={<Dropdown_order />} />
                <Route path="/dashboard/sale_form" element={<Sale_form />} />
                <Route path="/dashboard/invoice" element={<Invoice />} />
                <Route path="/dashboard/invoice_form" element={<Invoice_form />} />
                <Route path="/dashboard/dinvoice" element={<Dropdown_invoice />} />
                <Route path="/dashboard/package_form" element={<Package_form />} />
                <Route path="/dashboard/payment_form" element={<Payment_form />} />
                <Route path="/dashboard/active_items" element={<Active_items />} />
                <Route path="/dashboard/returnable_items" element={<Returnable_items />} />
                <Route path="/dashboard/nonreturnable_items" element={<Nonreturn />} />

                <Route path="/dashboard/dashboardmainview" element={<DashboardMainView />} />
                <Route path="/dashboard/inventory" element={<ExpenseForm />} />
                <Route path="/dashboard/sales" element={<Purchase />} />
                <Route path="/dashboard/purchase" element={<Purchase />} />
                <Route path="/dashboard/report" element={<Bills />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
