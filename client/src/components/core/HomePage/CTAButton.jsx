import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ children, active, linkto, shadow = true }) => {
    return (
        <Link to={linkto}>
            <div
                className={`text-center px-[24px] py-[12px] rounded-[8px] font-medium max-w-maxContent ${
                    active
                        ? " bg-[#024CAA] text-richblack-5"
                        : "bg-richblack-800 text-richblack-5"
                } hover:scale-95 transition-all duration-200 hover:shadow-none ${
                    active
                        ? "shadow-[2px_2px_0px_0px_rgba(243,243,224,0.8)]"
                        : "shadow-[2px_2px_0px_0px_rgba(0,0,0,0.18)]"
                } ${shadow ? "" : "shadow-none"}`}
            >
                {children}
            </div>
        </Link>
    );
};

export default CTAButton;
