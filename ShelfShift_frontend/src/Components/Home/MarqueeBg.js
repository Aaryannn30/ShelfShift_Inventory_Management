import React from 'react';
import Marquee from 'react-fast-marquee';
import GetStartedButton from './GetStarted';

const MarqueeBg = () => {
    const token = localStorage.getItem("authTokens");
    return (
        <div className="relative text-gray-500 bg-[#DDE6ED] h-screen grid place-items-center dark:bg-[#030637]">
            <div className="absolute inset-0 -mt-[40px]">
                <Marquee speed={50} className="opacity-30 text-[250px] font-extrabold dark:text-[#EEEDEB] text-[#364F6B]">
                    NAVIGATING YOUR INVENTORY JOURNEY WITH PRECISION AND EASE&nbsp;&nbsp;
                </Marquee>
            </div>

            <div className="absolute inset-0 mt-[145px]">
                <Marquee direction="right" speed={30} className="opacity-30 text-[250px] dark:text-[#EEEDEB] text-[#364F6B]">
                    MANAGE WITH EASE SUCCEED WITH CERTAINTY&nbsp;&nbsp;
                </Marquee>
            </div>

            <div className="absolute inset-0 mt-[325px]">
                <Marquee speed={50} className="opacity-30 text-[250px] font-extrabold dark:text-[#EEEDEB] text-[#364F6B]">
                    NAVIGATING YOUR INVENTORY JOURNEY WITH PRECISION AND EASE&nbsp;&nbsp;
                </Marquee>
            </div>

            <div className="absolute inset-0 mt-[505px] overflow-hidden">
                <Marquee direction="right" speed={30} className="opacity-30 text-[250px] dark:text-[#EEEDEB] text-[#364F6B]">
                    MANAGE WITH EASE SUCCEED WITH CERTAINTY&nbsp;&nbsp;
                </Marquee>
            </div>

            <div className="relative z-10 text-center px-8">
                <h1 className="text-7xl font-extrabold text-[#364F6B] dark:text-[#EEEDEB] leading-tight">
                    Welcome To <span className="text-[#526D82] dark:text-[#720455]">SHELFSHIFT</span>
                </h1>
                <p className="mt-4 text-lg text-[#526D82] dark:text-[#EEEDEB] max-w-xl mx-auto">
                    ShelfShift Inventory Management streamlines stock tracking with real-time updates and easy analytics. Simplify operations with an intuitive, user-friendly interface.
                </p>
            </div>
            {token === null &&
                <div className='absolute z-10 text-center mt-60'>
                    <GetStartedButton />
                </div>
            }
        </div>
    );
};

export default MarqueeBg;
