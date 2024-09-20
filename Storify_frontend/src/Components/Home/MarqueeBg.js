import React from 'react';
import Marquee from 'react-fast-marquee';
import GetStartedButton from '../Theme/GetStarted';

const MarqueeBg = () => {
    return (
        <div className="relative text-gray-500 bg-gray-50 h-screen grid place-items-center dark:bg-slate-900">
            <div className="absolute inset-0 -mt-[40px]">
                <Marquee speed={50} className="opacity-30 text-[200px] font-extrabold dark:text-yellow-50">
                NAVIGATING YOUR INVENTORY JOURNEY WITH PRECISION AND EASE&nbsp;&nbsp;
                </Marquee>
            </div>

            <div className="absolute inset-0 mt-[100px]">
                <Marquee direction="right" speed={30} className="opacity-30 text-[200px] dark:text-yellow-50">
                MANAGE WITH EASE, SUCCEED WITH CERTAINTY&nbsp;&nbsp;
                </Marquee>
            </div>

            <div className="absolute inset-0 mt-[330px]">
                <Marquee speed={50} className="opacity-30 text-[200px] font-extrabold dark:text-yellow-50">
                NAVIGATING YOUR INVENTORY JOURNEY WITH PRECISION AND EASE&nbsp;&nbsp;
                </Marquee>
            </div>

            <div className="absolute inset-0 mt-[515px] overflow-hidden">
                <Marquee direction="right" speed={30} className="opacity-30 text-[200px] dark:text-yellow-50">
                MANAGE WITH EASE, SUCCEED WITH CERTAINTY&nbsp;&nbsp;
                </Marquee>
            </div>

          
            <div className="relative z-10 text-center px-8">
                <h1 className="text-7xl font-extrabold text-gray-900 dark:text-neutral-100 leading-tight">
                    Welocme To  <span className="text-blue-500">STORIFY</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-neutral-500 max-w-xl mx-auto">
                Storify Inventory Management streamlines stock tracking with real-time updates and easy analytics. Simplify operations with an intuitive, user-friendly interface.
                </p>
            </div>
            <div className='absolute z-10 text-center mt-60'>
                <GetStartedButton/>
            </div>
        </div>
    );
};

export default MarqueeBg;
