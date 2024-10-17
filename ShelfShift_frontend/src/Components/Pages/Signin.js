import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import i5 from './i5.jpeg';

const Signin = ({ handleToggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        email.length > 0 && loginUser(email, password);
        console.log(email);
        console.log(password);
    };

    return (
        <div className="w-screen bg-[#DDE6ED] dark:bg-[#030637]">
            <div className="flex justify-center h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{
                        backgroundImage: `url(${i5})`
                    }}
                >
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white">Welcome to&nbsp;
                                < span className="text-[#FC5185]">
                                    SHELFSHIFT
                                </span>
                            </h2>
                            <p className="max-w-xxl mt-3 text-lg text-gray-300">
                                Sign in to your Account
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <p className="mt-3 text-[#526D82] dark:text-[#EEEDEB]">
                                Sign in to access your account
                            </p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-[#364F6B] dark:text-[#EEEDEB]">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example@example.com"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-[#3C0753] dark:text-[#EEEDEB] dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-[#364F6B] dark:text-[#EEEDEB]">Password</label>
                                        <a href="#" className="text-sm text-[#526D82] dark:text-[#720455] hover:underline">Forgot password?</a>
                                    </div>

                                    <input
                                        // pattern="[A-Za-z]{3}"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Your Password"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-[#3C0753] dark:text-[#EEEDEB] dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#526D82] dark:bg-[#720455] rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p className="mt-6 text-sm text-center text-[#526D82] dark:text-[#720455]">
                                Don’t have an account yet?{" "}
                                <button onClick={handleToggle} className="text-blue-500 focus:outline-none focus:underline hover:underline">
                                    Sign up
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
