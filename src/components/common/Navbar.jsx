import React from "react";
import logoFullLight from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";

const Navbar = () => {
    return (
        <div className="h-14 w-full border-b border-richblack-700 bg-richblack-800 flex justify-center items-center">
            <div className="w-11/12 flex justify-around items-center h-8">
                <Link to="/">
                    <img
                        src={logoFullLight}
                        alt="Logo"
                        width="160px"
                        height="32px"
                    />
                </Link>
                <div className="text-[16px] text-richblack-5">
                    <ul className="flex flex-row gap-3">
                        {NavbarLinks.map((link, i) => {
                            return (
                                <li key={i}>
                                    <Link to={link.path}>{link.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex flex-row gap-4">
                    <Link
                        to={"/login"}
                        className="px-3 py-2 rounded-lg text-richblack-100 border border-richblack-700 bg-richblack-800"
                    >
                        Log in
                    </Link>
                    <Link
                        to={"/signup"}
                        className="px-3 py-2 rounded-lg text-richblack-100 border border-richblack-700 bg-richblack-800"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
