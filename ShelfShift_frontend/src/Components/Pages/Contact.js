import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment, AiOutlineLinkedin } from 'react-icons/ai';
import { RiTwitterXLine } from "react-icons/ri";
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

export default function Contact() {
    return (
        <>
            <Navbar scroll='true'/>
            <div>
                <section className="bg-[#DDE6ED] dark:bg-[#030637] pt-12 pb-10">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-bold text-center text-[#424874] dark:text-[#EEEDEB] mb-6">Contact Us</h1>
                        <div className="bg-white dark:bg-[#3C0753] shadow-lg rounded-lg p-8">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
                                <div className="flex items-center lg:mb-0 mb-10">
                                    <div>
                                        <h4 className="text-indigo-600 text-base font-large leading-6 mb-4 lg:text-left text-center">
                                            We'd Love to Hear from You
                                        </h4>
                                        <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center dark:text-[#EEEDEB]">
                                            Reach Out To Us
                                        </h2>
                                        <form action="">
                                            <input
                                                type="text"
                                                className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8 dark:bg-[#3C0753] dark:text-[#EEEDEB]"
                                                placeholder="Name"
                                            />
                                            <input
                                                type="email"
                                                className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8 dark:bg-[#3C0753] dark:text-[#EEEDEB]"
                                                placeholder="Email"
                                            />
                                            <textarea
                                                name=""
                                                id="text"
                                                className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8 dark:bg-[#3C0753] dark:text-[#EEEDEB]"
                                                placeholder="Message"
                                            ></textarea>
                                            <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('https://pagedone.io/asset/uploads/1696245837.png')] ">
                                    <div className="">
                                        <div className="lg:w-96 w-auto h-auto bg-white dark:bg-[#720455] shadow-xl lg:p-6 p-4">
                                            <a href="javascript:;" className="flex items-center mb-6">
                                                <AiOutlinePhone size={30} />
                                                <h5 className="text-black dark:text-[#EEEDEB] text-base font-normal leading-6 ml-5">9034235334</h5>
                                            </a>
                                            <a href="javascript:;" className="flex items-center mb-6">
                                                <AiOutlineMail size={30} />
                                                <h5 className="text-black dark:text-[#EEEDEB] text-base font-normal leading-6 ml-5">shelfshift@gmail.com</h5>
                                            </a>
                                            <a href="javascript:;" className="flex items-center mb-6">
                                                <AiOutlineEnvironment size={30} />
                                                <h5 className="text-black dark:text-[#EEEDEB] text-base font-normal leading-6 ml-5">Ahmedabad , Gujrat , India</h5>
                                            </a>
                                            <div className="flex items-center justify-center border-t border-gray-100 pt-6">
                                                <a href="" target='_blank' className="mr-6">
                                                    <AiOutlineLinkedin size={30} className="text-black dark:text-[#EEEDEB]" />
                                                </a>
                                                <a href="https://twitter.com/shelfshift" target='_blank' className="mr-6">
                                                    <RiTwitterXLine size={30} className="text-black dark:text-[#EEEDEB]" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
