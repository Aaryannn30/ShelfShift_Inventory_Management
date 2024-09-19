import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GetStartedButton from "../Theme/GetStarted";
import ThemeToggle from "../Theme/ThemeToggle";
import { jwtDecode } from "jwt-decode"
import AuthContext from '../../context/AuthContext'

const Navbar = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const allowScroll = (props.scroll === 'true');
    const [isSignup, setIsSignup] = useState(true);

    const { user, logoutUser } = useContext(AuthContext)
    const token = localStorage.getItem("authTokens")

    if (token) {
        const decoded = jwtDecode(token)
        var user_id = decoded.user_id
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all dark:bg-slate-900 duration-300 ${isScrolled
                ? "bg-white shadow-lg border-b-2 border-gray-200 py-4 dark:border-slate-800 dark:shadow-white-lg"
                : allowScroll ? "bg-transparent  py-3" : "py-4"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-indigo-600">ShelfShift</div>
                </div>
                <div className="flex items-center space-x-4">
                    <Link
                        to="/pricing"
                        className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-white"
                    >
                        Pricing
                    </Link>
                    <div className="space-x-4">
                        {token === null &&
                            <>
                                <Link
                                    to="/signup"
                                    className="relative inline-block px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-400 hover:shadow-lg dark:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 dark:text-white dark:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"></span>
                                    <span className="relative z-10">Signup</span>
                                </Link>
                                <Link
                                    to="/signin"
                                    className="relative inline-block px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-400 hover:shadow-lg dark:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 dark:text-white dark:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"></span>
                                    <span className="relative z-10">Signin</span>
                                </Link>

                            </>
                        }
                        {token !== null &&
                            <>
                                <Link
                                    to="/dsidebar"
                                    className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-white"
                                >
                                    Dashboard
                                </Link>


                                <Link
                                    to="/"
                                    className="relative inline-block px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-400 hover:shadow-lg dark:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 dark:text-white dark:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500"
                                    onClick={logoutUser}
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"></span>
                                    <span className="relative z-10">Logout</span>
                                </Link>

                            </>
                        }
                        <ThemeToggle/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

