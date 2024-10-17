import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = (Props) => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleToggle = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <>
            {Props.type === 'signin' ? (<div className="relative bg-white dark:bg-gray-900">
                <div className="flex justify-center items-center h-screen overflow-hidden">

                    <div className="relative w-fit ">
                        <div
                            className={`flex w-[200%] transition-transform duration-700 ease-in-out transform ${isSignIn ? "translate-x-0" : "-translate-x-1/2"
                                }`}
                        >
                            {/* Sign In */}
                            <div className="w-full flex justify-center items-center">
                                <Signin handleToggle={handleToggle} />
                            </div>
                            {/* Sign Up */}
                            <div className="w-full flex justify-center items-center">
                                <Signup handleToggle={handleToggle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>) :
            (<div className="relative bg-white dark:bg-gray-900">
                <div className="flex justify-center items-center h-screen overflow-hidden">

                    <div className="relative w-fit ">
                        <div
                            className={`flex w-[200%] transition-transform duration-700 ease-in-out transform ${isSignIn ? "translate-x-0" : "-translate-x-1/2"
                                }`}
                        >
                            {/* Sign up */}
                            <div className="w-full flex justify-center items-center">
                                <Signup handleToggle={handleToggle} />
                            </div>
                            {/* Sign in */}
                            <div className="w-full flex justify-center items-center">
                                <Signin handleToggle={handleToggle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </>
    );
};

export default Auth;
