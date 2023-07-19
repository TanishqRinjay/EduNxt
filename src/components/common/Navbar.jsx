import React, { useEffect, useState } from "react";
import logoFullLight from "../../assets/Logo/Logo-Full-Light.png";
import { Link, useLocation, matchPath } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { userType } from "../../data/userType";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";

const allSubLinks = [
    {
        title: "Python",
        link: "/python",
    },
    {
        title: "Web-Dev",
        link: "/web-development",
    },
];

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);

    const [subLinks, setSubLinks] = useState([]);

    // const fetchSubLinks = async () => {
    //     try {
    //         const result = await apiConnector("GET", categories.CATEGORIES_API);
    //         console.log("Printing sublinks: " + result);
    //         setSubLinks(result);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // useEffect(() => {
    //     fetchSubLinks();
    // }, []);

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
                                        <div className="group cursor-pointer flex flex-row items-center justify-center relative">
                                            <p>{link.title}</p>
                                            <IoMdArrowDropdown />
                                            <div className="invisible absolute left-[50%] top-[50%] flex flex-col gap-3 rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all group-hover:visible group-hover:opacity-100 lg:w-[250px] translate-x-[-50%] translate-y-[20%] z-10">
                                                <div className="absolute left-[50%] translate-y-[-15%] translate-x-[72%] top-0 h-6 w-6 rotate-45 bg-richblack-5"></div>
                                                    {allSubLinks.length ? (
                                                        allSubLinks.map(
                                                            (subLink, i) => (
                                                                <Link
                                                                    to={`/catalog/${subLink.link}`}
                                                                    key={i}
                                                                >
                                                                    <p>
                                                                        {
                                                                            subLink.title
                                                                        }
                                                                    </p>
                                                                </Link>
                                                            )
                                                        )
                                                    ) : (
                                                        <div></div>
                                                    )}
                                            </div>
                                        </div>
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

                    {token === null && (
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
                    )}
                    {token != null && <ProfileDropdown />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
