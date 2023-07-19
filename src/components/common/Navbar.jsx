import React from "react";
import logoFullLight from "../../assets/Logo/Logo-Full-Light.png";
import { Link, useLocation, matchPath } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { userType } from "../../data/userType";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropdown from "../core/Auth/ProfileDropdown";

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);

    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    return (
        <div className="h-14 w-full border-b border-richblack-700 bg-richblack-900 flex justify-center items-center">
            <div className="w-11/12 flex justify-between px-[70px] items-center h-8">
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
                        {NavbarLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    {link.title === "Catalog" ? (
                                        <div></div>
                                    ) : (
                                        <Link to={link?.path}>
                                            <p
                                                className={`${
                                                    matchRoute(link?.path)
                                                        ? "text-yellow-25"
                                                        : "text-richblack-25"
                                                }`}
                                            >
                                                {link.title}
                                            </p>
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Login/SignUp/Dashboard */}

                <div className="flex flex-row gap-4">
                    {
                        //Cart is only available for Students and userType[2] consists of type="student"
                        // FOR CHECKING: userType[2].type === "student" &&
                        user && user?.accountType === userType[2].type && (
                            <Link
                                to="/dashboard/cart"
                                className="relative text-richblack-5 hover:text-richblack-100 text-xl"
                            >
                                <AiOutlineShoppingCart />
                                {totalItems && (
                                    <span className="absolute right-[-5px] top-[-5px] text-yellow-25 text-xs bg-pink-600 rounded-full w-4 h-4 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        )
                    }

                    {
                        token===null &&
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
                    }
                    {
                        token!=null && <ProfileDropdown/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
