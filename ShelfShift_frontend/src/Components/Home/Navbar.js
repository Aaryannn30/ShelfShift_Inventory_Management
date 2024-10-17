import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GetStartedButton from "./GetStarted";
import ThemeToggle from "../Theme/ThemeToggle";
import { jwtDecode } from "jwt-decode";
import AuthContext from '../../context/AuthContext';
import SS_logo from './img/SS-logo.png';

const Navbar = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const allowScroll = (props.scroll === 'true');
    const [isSignup, setIsSignup] = useState(true);

    const { user, logoutUser } = useContext(AuthContext);
    const token = localStorage.getItem("authTokens");

    if (token) {
        const decoded = jwtDecode(token);
        var user_id = decoded.user_id;
    }

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    useEffect(() => {
        if (allowScroll) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 0);
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            setIsScrolled(false);
        }
    }, [allowScroll]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#DDE6ED] shadow-lg border-b-2 border-gray-200 py-4 dark:bg-[#030637]  dark:shadow-lg"
                : allowScroll ? "bg-transparent py-3" : "py-4"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                <Link to='/'>
                    <div className="flex items-center space-x-4">
                        <img src={SS_logo} className="w-28 h-20 -mr-11 -m-6" alt="Logo" />
                        <div className="text-2xl font-bold text-[#364F6B] dark:text-[#EEEDEB]">SHELFSHIFT</div>
                    </div>
                </Link>
                <div className="flex items-center space-x-4">
                    <Link
                        to="/"
                        className="text-[#526D82] hover:text-[#364F6B] transition-colors dark:text-[#FEFBF6] dark:hover:text-[#DEECFF]"
                    >
                        Home
                    </Link>
                    <Link
                        to="/pricing"
                        className="text-[#526D82] hover:text-[#364F6B] dark:hover:text-[#DEECFF] transition-colors dark:text-[#FEFBF6] "
                    >
                        Pricing
                    </Link>
                    <div className="items-end mt-2">
                        <ThemeToggle />
                    </div>
                    <div className="space-x-4">
                        {token === null &&
                            <>
                                <Link
                                    to="/auth/signup"
                                    className="relative inline-block px-4 py-2 font-semibold text-white bg-[#526D82] rounded-lg shadow-md hover:bg-[#364F6B] transition-all duration-300 dark:bg-[#720455] dark:hover:bg-[#3C0753] focus:outline-none focus:ring-4 focus:ring-[#DDE6ED] dark:focus:ring-[#FEFBF6]"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"></span>
                                    <span className="relative z-10">Sign up</span>
                                </Link>
                                <Link
                                    to="/auth/signin"
                                    className="relative inline-block px-4 py-2 font-semibold text-white bg-[#526D82] rounded-lg shadow-md hover:bg-[#364F6B] transition-all duration-300 dark:bg-[#720455] dark:hover:bg-[#3C0753] focus:outline-none focus:ring-4 focus:ring-[#DDE6ED] dark:focus:ring-[#FEFBF6]"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"></span>
                                    <span className="relative z-10">Sign in</span>
                                </Link>
                            </>
                        }
                        {token !== null &&
                            <>
                                <Link
                                    to="/dashboard/dashboardmainview"
                                    className="text-[#526D82] hover:text-[#364F6B] transition-colors dark:text-[#FEFBF6] dark:hover:text-[#EEEDEB]"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/"
                                    className="relative inline-block px-4 py-2 font-semibold text-white bg-[#526D82] rounded-lg shadow-md hover:bg-[#364F6B] transition-all duration-300 dark:bg-[#720455] dark:hover:bg-[#3C0753] focus:outline-none focus:ring-4 focus:ring-[#DDE6ED] dark:focus:ring-[#FEFBF6]"
                                    onClick={logoutUser}
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"></span>
                                    <span className="relative z-10">Log out</span>
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
