import React from "react";
import * as Icons from "react-icons/vsc";
import { NavLink, useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";

const SidebarLink = ({ link, iconName }) => {
    const Icon = Icons[iconName];
    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    return (
        <NavLink
            to={link.path}
            className={`relative px-8 py-2 text-sm font-medium text-richblack-300 ${
                matchRoute(link.path)
                    ? "bg-yellow-800 border-l border-l-yellow-50 text-yellow-50"
                    : "bg-transparent"
            }`}
        >
            {" "}
            {/* onClick event addition */}
            <span
                className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 ${
                    matchRoute(link.path) ? "opacity-100" : "opacity-0"
                }`}
            ></span>
            <div className="flex items-center gap-x-2">
                <Icon />
                <span>{link.name}</span>
            </div>
        </NavLink>
    );
};

export default SidebarLink;
