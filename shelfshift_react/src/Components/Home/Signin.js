import React, { useState , useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext'

const Signin = ({ handleToggle }) => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const {loginUser} = useContext(AuthContext)
    const handleSubmit = e => {
      e.preventDefault()
    //   const email = e.target.email.value
    //   const password = e.target.password.value
  
      email.length > 0 && loginUser(email, password)
      console.log(email)
      console.log(password)
     
    }

    // const handleSignin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Make the sign-in request to the API
    //         await axios.post("/api/login/", {
    //             email: email,
    //             password: password,
    //         });
            

    //         // On successful sign-in, redirect the user to the homepage or dashboard
    //         navigate("/dashboard");
    //     } catch (error) {
    //         // Display error if sign-in fails
    //         setError("Invalid email or password. Please try again.");
    //     }
    // };

    // const handleSignin = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //         const response = await axios.post("/api/login/", {
    //             email: email,
    //             password: password,
    //         });
    
    //         localStorage.setItem("access_token", response.data.access);
    //         localStorage.setItem("refresh_token", response.data.refresh);
    
    //         navigate("/dashboard");
    //     } catch (error) {
    //         setError("Invalid email or password. Please try again.");
    //     }
    // };
    

    return (
        <div className="w-screen   bg-white dark:bg-slate-900">
            <div className="flex justify-center h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                    }}
                >
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Meraki UI</h2>
                            <p className="max-w-xl mt-3 text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
                            </div>

                            <p className="mt-3 text-gray-500 dark:text-gray-300">
                                Sign in to access your account
                            </p>
                            {/* {error && <p className="text-red-500 text-center mt-4">{error}</p>} */}
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="example@example.com" 
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                    </div>

                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="Your Password" 
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mt-6">
                                    <button 
                                        type="submit" 
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p className="mt-6 text-sm text-center text-gray-400">
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
