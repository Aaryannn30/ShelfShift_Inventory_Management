import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetStartedButton from "../Theme/GetStarted";
import ThemeToggle from "../Theme/ThemeToggle";

const Navbar = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const allowScroll = (props.scroll === 'true');

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all dark:bg-slate-900 duration-300 ${
                isScrolled
                    ? "bg-white shadow-lg border-b-2 border-gray-200 py-4 dark:border-slate-800 dark:shadow-white-xl"
                    : allowScroll ? "bg-transparent  py-3" : "py-4"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold text-indigo-600">Logo</div>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="#pricing"
                        className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-white"
                    >
                        Pricing
                    </a>
                    <Link
                        to="/signin"
                        className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-white"
                    >
                        Log In
                    </Link>
                    <ThemeToggle />
                    <GetStartedButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

