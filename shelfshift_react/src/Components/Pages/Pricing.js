import React , {useState} from "react";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import { TbCalendarMonth } from "react-icons/tb";

const SliderToggle = ({ isMonthly, setIsMonthly }) => {
    const TOGGLE_CLASSES =
        "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

    return (
        <div className="relative flex w-fit items-center rounded-full mt-4">
            <button
                className={`${TOGGLE_CLASSES} ${isMonthly ? "text-white" : "text-slate-800"
                    }`}
                onClick={() => {
                    setIsMonthly(true);
                }}
            >
                <FiCalendar className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Monthly</span>
            </button>
            <button
                className={`${TOGGLE_CLASSES} ${!isMonthly ? "text-white" : "text-slate-800"
                    }`}
                onClick={() => {
                    setIsMonthly(false);
                }}
            >
                <TbCalendarMonth className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Annually</span>
            </button>
            <div
                className={`absolute inset-0 z-0 flex ${!isMonthly ? "justify-end" : "justify-start"
                    }`}
            >
                <motion.span
                    layout
                    transition={{ type: "spring", damping: 15, stiffness: 250 }}
                    className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                />
            </div>
        </div>
    );
};

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <div className="bg-gray-50 py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-5">Pricing</h2>
                <div className="inline-flex space-x-4 mb-4">
                    <SliderToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individuals */}
                    <div className="bg-transparent shadow-lg rounded-lg py-16 px-6 transition-all duration-300 hover:border-purple-500 hover:bg-white ">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Individuals</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                        <div className="text-sm font-medium text-gray-500">/user /month</div>
                        <p className="mt-4 text-gray-700">For individuals looking to up their productivity gains. Free forever.</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-900"><span>✔</span> 1 Team Member</li>
                            <li className="text-gray-900"><span>✔</span> 3 Boards</li>
                            <li className="text-gray-900"><span>✔</span> 5 Workflows</li>
                            <li className="text-gray-400"><span>✖</span> Upgraded Support</li>
                            <li className="text-gray-400"><span>✖</span> Custom Branding</li>
                            <li className="text-gray-400"><span>✖</span> Self Host</li>
                        </ul>
                        <button className="mt-6 py-2 px-4 bg-black text-white font-semibold rounded-lg w-full transition-all duration-300 hover:bg-white hover:text-black border hover:border-black">
                            TRY IT NOW
                        </button>
                    </div>

                    {/* Teams */}
                    <div className="bg-white shadow-lg rounded-lg p-6 border-[1px] border-black transition-all duration-300 hover:border-purple-500 hover:bg-white">
                        <div className="relative">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Teams</h3>
                            <span className="absolute top-0 right-0 px-3 py-0.5 bg-purple-500 text-white text-xs font-semibold rounded-full">Most Popular</span>
                        </div>
                        <div className="text-4xl font-bold text-gray-900 mb-2">$12</div>
                        <div className="text-sm font-medium text-gray-500">/user /month</div>
                        <p className="mt-4 text-gray-700">For teams looking to scale their team efficiently. Stay on track.</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-900"><span>✔</span> ∞ Team Members</li>
                            <li className="text-gray-900"><span>✔</span> ∞ Boards</li>
                            <li className="text-gray-900"><span>✔</span> ∞ Workflows</li>
                            <li className="text-gray-900"><span>✔</span> Upgraded Support</li>
                            <li className="text-gray-400"><span>✖</span> Custom Branding</li>
                            <li className="text-gray-400"><span>✖</span> Self Host</li>
                        </ul>
                        <button className="mt-6 py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg w-full transition-all duration-300 hover:bg-white hover:text-black border hover:border-black">
                            TRY IT NOW
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className="shadow-lg rounded-lg p-6 border-black transition-all duration-300 hover:border-purple-500 hover:bg-white">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-2">$24</div>
                        <div className="text-sm font-medium text-gray-500">/user /month</div>
                        <p className="mt-4 text-gray-700">For enterprises looking to see new heights. Manage without the stress.</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-900"><span>✔</span> ∞ Team Members</li>
                            <li className="text-gray-900"><span>✔</span> ∞ Boards</li>
                            <li className="text-gray-900"><span>✔</span> ∞ Workflows</li>
                            <li className="text-gray-900"><span>✔</span> Enterprise Support</li>
                            <li className="text-gray-900"><span>✔</span> Custom Branding</li>
                            <li className="text-gray-900"><span>✔</span> Self Host</li>
                        </ul>
                        <button className="mt-6 py-2 px-4 bg-black text-white font-semibold rounded-lg w-full transition-all duration-300 hover:bg-white hover:text-black border hover:border-black">
                            TRY IT NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
