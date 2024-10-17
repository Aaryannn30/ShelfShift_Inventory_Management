import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <footer className="w-full bg-[#526d82] dark:bg-[#1a0742]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
                        <div className="block">
                            <h4 className="text-xl text-[#3C0753] dark:text-[#EEEDEB] font-bold mb-7">ShelfShift</h4>
                            <ul className="text-lg transition-all duration-500">
                                <li className="mb-6"><Link to="/" className="text-[#EEEDEB] dark:text-[#424874] hover:text-[#B1B2FF]  dark:hover:text-[#B1B2FF] ">Home</Link></li>
                                <li className="mb-6"><Link to="/Pricing" className="text-[#EEEDEB] dark:text-[#424874] hover:text-[#B1B2FF]  dark:hover:text-[#B1B2FF] ">Pricing</Link></li>
                            </ul>
                        </div>
                        <div className="block">
                            <h4 className="text-xl text-[#3C0753] dark:text-[#EEEDEB] font-bold mb-7">Resources</h4>
                            <ul className="text-lg transition-all duration-500">
                                <li className="mb-6"><Link to="/FAQ" className="text-[#EEEDEB] dark:text-[#424874] hover:text-[#B1B2FF]  dark:hover:text-[#B1B2FF] ">FAQs</Link></li>
                                <li className="mb-6"><Link to="/contact" className="text-[#EEEDEB] dark:text-[#424874] hover:text-[#B1B2FF]  dark:hover:text-[#B1B2FF] ">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="block">
                            <h4 className="text-xl text-[#3C0753] dark:text-[#EEEDEB] font-bold mb-7">Support</h4>
                            <ul className="text-lg transition-all duration-500">
                                <li className="mb-6"><Link to="/Terms_Condition" className="text-[#EEEDEB] dark:text-[#424874] hover:text-[#B1B2FF]  dark:hover:text-[#B1B2FF] ">Terms & Conditions</Link></li>
                                <li><Link to="/Privacy_Policy" className="text-[#EEEDEB] dark:text-[#424874] hover:text-[#B1B2FF]  dark:hover:text-[#B1B2FF] ">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-7 border-t border-[#3C0753] dark:border-[#720455]">
                        <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
                            <span className="text-[#3C0753] dark:text-[#EEEDEB]  block">©
                                <Link to="https://twitter.com/arynmru1" target='_blank'>Aryan Maru</Link> 2024, All rights reserved.</span>
                            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
                                <Link to="https://www.facebook.com/shelfshift" target='_blank' className="w-9 h-9 rounded-full border border-[#3C0753] dark:border-[#720455] flex justify-center items-center hover:border-indigo-600">
                                    <FaFacebookF className="text-[#3C0753] dark:text-[#EEEDEB] " />
                                </Link>
                                <Link to="https://twitter.com/shelfshift" target='_blank' className="w-9 h-9 rounded-full border border-[#3C0753] dark:border-[#720455] flex justify-center items-center hover:border-indigo-600">
                                    <RiTwitterXLine  className="text-[#3C0753] dark:text-[#EEEDEB] " />
                                </Link>
                                <Link to="https://www.instagram.com/shelfshift" target='_blank' className="w-9 h-9 rounded-full border border-[#3C0753] dark:border-[#720455] flex justify-center items-center hover:border-indigo-600">
                                    <FaInstagram className="text-[#3C0753] dark:text-[#EEEDEB] " />
                                </Link>
                                <Link to="https://www.linkedin.com/in/shelfshift" target='_blank' className="w-9 h-9 rounded-full border border-[#3C0753] dark:border-[#720455] flex justify-center items-center hover:border-indigo-600">
                                    <FaLinkedinIn className="text-[#3C0753] dark:text-[#EEEDEB] " />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
