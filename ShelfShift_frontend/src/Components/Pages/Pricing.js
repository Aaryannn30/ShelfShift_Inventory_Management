import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import { TbCalendarMonth } from "react-icons/tb";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";

const SliderToggle = ({ isMonthly, setIsMonthly }) => {
    const TOGGLE_CLASSES = "text-sm font-medium flex items-center gap-2 px-3 py-2 transition-colors relative z-10";

    return (
        <>
            <div className="relative flex w-fit items-center rounded-full mt-4 mx-auto"> {/* Centered using mx-auto */}
                <button
                    className={`${TOGGLE_CLASSES} ${isMonthly ? "text-white" : "text-[#424874] dark:text-[#EEEDEB]"}`}
                    onClick={() => setIsMonthly(true)}
                >
                    <FiCalendar className="relative z-10 text-lg" />
                    <span className="relative z-10">Monthly</span>
                </button>
                <button
                    className={`${TOGGLE_CLASSES} ${!isMonthly ? "text-white" : "text-[#424874] dark:text-[#EEEDEB]"}`}
                    onClick={() => setIsMonthly(false)}
                >
                    <TbCalendarMonth className="relative z-10 text-lg" />
                    <span className="relative z-10">Annually</span>
                </button>
                <div className={`absolute inset-0 z-0 flex ${!isMonthly ? "justify-end" : "justify-start"}`}>
                    <motion.span
                        layout
                        transition={{ type: "spring", damping: 15, stiffness: 250 }}
                        className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#720455] to-[#3C0753] dark:from-violet-600 dark:to-indigo-600"
                    />
                </div>
            </div>
        </>
    );
};

const PricingCard = ({ title, price, features, isPopular, background, additionalClasses }) => (
    <div className={`relative shadow-lg rounded-lg p-6 transition-all duration-300 hover:scale-105 ${background} ${additionalClasses}`}>
        {isPopular && (
            <span className="absolute top-0 right-0 px-3 py-0.5 bg-purple-500 text-white text-xs font-semibold rounded-full">
                Most Popular
            </span>
        )}
        <h3 className="text-2xl font-semibold text-[#424874] dark:text-[#EEEDEB] mb-4">{title}</h3>
        <div className="text-4xl font-bold text-[#424874] dark:text-[#EEEDEB] mb-2">{price}</div>
        <div className="text-sm font-medium text-gray-500">/month</div>
        <p className="mt-4 text-gray-700 dark:text-[#FEFBF6]">
            {isPopular ? "For teams looking to scale efficiently." : "For individuals seeking productivity."}
        </p>
        <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span> {feature}
                </li>
            ))}
        </ul>
        <Link to='/payment'>
        <button className="mt-6 py-2 px-4 bg-black text-white font-semibold rounded-lg w-full transition-all duration-300 hover:bg-white hover:text-black border hover:border-black">
            TRY IT NOW
        </button>
        </Link>
    </div>
);

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <>
            <Navbar scroll='true' />
            <div className="bg-[#DDE6ED] dark:bg-[#030637] pt-16 h-screen">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-[#424874] dark:text-[#EEEDEB] mb-5">Pricing</h2>
                    <SliderToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 justify-center items-center mx-auto max-w-[1200px]"> {/* Centered and aligned */}
                        {/* Individuals Card */}
                        <PricingCard
                            title="Individuals"
                            price={isMonthly ? "₹69" : "₹49"}
                            features={[
                                "1 Inventory Management Account",
                                "100 Items Limit",
                                "Basic Reporting",
                                "1 Warehouse",
                                "Email Support",
                                "Custom Integrations",
                            ]}
                            background="bg-[#DDE6ED] hover:bg-[#C5D1E5] dark:bg-[#3C0753] dark:hover:bg-[#3C2A53]"
                            additionalClasses="w-full md:h-[400px]" // Equal width, reduced height
                        />

                        {/* Teams Card (Middle card with increased height) */}
                        <PricingCard
                            title="Teams"
                            price={isMonthly ? "₹599" : "₹499"}
                            features={[
                                "5 Inventory Management Accounts",
                                "Unlimited Items",
                                "Advanced Reporting",
                                "5 Warehouses",
                                "Priority Email Support",
                                "Custom Integrations",
                            ]}
                            isPopular={true}
                            background="bg-[#FEFBF6] hover:bg-[#f3e9e0] dark:bg-[#720455] dark:hover:bg-[#5b0d3e]"
                            additionalClasses="w-full md:h-[500px]" // Increased height for the middle card
                        />

                        {/* Enterprise Card */}
                        <PricingCard
                            title="Enterprise"
                            price={isMonthly ? "₹999" : "₹899"}
                            features={[
                                "Unlimited Accounts",
                                "Unlimited Items",
                                "Full Reporting Suite",
                                "Unlimited Warehouses",
                                "24/7 Support",
                                "Custom Integrations",
                            ]}
                            background="bg-[#EEEDEB] hover:bg-[#d0d4d7] dark:bg-[#3C0753] dark:hover:bg-[#3C2A53]"
                            additionalClasses="w-full md:h-[400px]" // Equal width, reduced height
                        />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Pricing;
