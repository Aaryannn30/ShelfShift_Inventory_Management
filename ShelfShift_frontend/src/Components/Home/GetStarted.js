import React from "react";
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const GetStartedButton = () => {
    return (
        <div className="group relative inline-flex">
            <Link to='/auth/signup'>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-inherit text-[13px] font-medium rounded-[0.9em] border-none flex items-center overflow-hidden relative h-[2.8em] pl-[0.6em] pr-[2.6em] py-[0.35em] shadow-[inset_0_0_1.6em_-0.6em_rgba(138,43,226,0.5)] transition-all duration-300" onClick={() => {

                }}>
                    Get started
                    <div className="bg-white ml-1 absolute flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] shadow-[0.1em_0.1em_0.6em_0.2em_rgba(138,43,226,0.5)] right-[0.3em] transition-all duration-300 group-hover:w-[calc(100%-0.6em)]">
                        <TiArrowRightOutline className="text-slate-700" />
                    </div>
                </button>
            </Link>
        </div>
    );
};

export default GetStartedButton;
