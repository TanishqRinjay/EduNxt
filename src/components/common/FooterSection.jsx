import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/Logo/Logo-Full-Light.png";
import { FaGoogle, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FooterLinks } from "../../data/footer-links";

// Footer Link creation
const Company = ["About", "Careers", "Affiliates"];
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
    "Articles",
    "Blog",
    "Chart Sheet",
    "Code challenges",
    "Docs",
    "Projects",
    "Videos",
    "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Support = ["Help Center"];
const Community = ["Forums", "Chapters", "Events"];

const FooterSection = () => {
    return (
        <div className="flex flex-col w-11/12 mx-auto items-center justify-center h-[100vh]">
            <div className="flex flex-row items-start justify-center w-[100%] py-[50px]">
                {/* First Half */}
                <div className="w-[50%] flex flex-col lg:flex-row justify-end items-start">
                    <div className="flex flex-col lg:flex-row gap-3 w-[60%]">
                        {/* Company and Resources */}
                        <div className="flex flex-col gap-3 w-[50%] text-richblack-400 leading-[22px]">
                            <div className=" h-[32px] w-[160px]">
                                <img
                                    src={LogoLight}
                                    alt="logo"
                                    className=" h-[100%] w-[100%] "
                                />
                            </div>
                            <h2 className=" font-semibold text-richblack-100">
                                Company
                            </h2>
                            <div className="flex flex-col text-[14px] gap-2">
                                {Company.map((ele, index) => {
                                    return (
                                        <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                            <Link
                                                key={index}
                                                to={`/${ele.toLowerCase()}`}
                                            >
                                                {ele}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-row gap-3">
                                <FaInstagram />
                                <FaGoogle />
                                <FaTwitter />
                                <FaLinkedinIn />
                            </div>
                        </div>
                        {/* Resources and support */}
                        <div className="text-richblack-400 flex flex-col gap-3 w-[50%] leading-[22px]">
                            <div className=" flex flex-col gap-3">
                                <h2 className=" font-semibold text-richblack-100">
                                    Resources
                                </h2>
                                <div className="flex flex-col text-[14px] gap-2">
                                    {Resources.map((ele, index) => {
                                        return (
                                            <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                                <Link
                                                    key={index}
                                                    to={`/${ele
                                                        .split(" ")
                                                        .join("-")
                                                        .toLowerCase()}`}
                                                >
                                                    {ele}
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className=" flex flex-col gap-3">
                                <h2 className=" font-semibold text-richblack-100">
                                    Support
                                </h2>
                                <div className="flex flex-col text-[14px] gap-2">
                                    {Support.map((ele, index) => {
                                        return (
                                            <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                                <Link
                                                    key={index}
                                                    to={`/${ele
                                                        .split(" ")
                                                        .join("-")
                                                        .toLowerCase()}`}
                                                >
                                                    {ele}
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Plans and Community */}
                    <div className="w-[28%] leading-[22px]">
                        <div className="text-richblack-400 flex flex-col gap-3">
                            <div className=" flex flex-col gap-3">
                                <h2 className=" font-semibold text-richblack-100">
                                    Plans
                                </h2>
                                <div className="flex flex-col text-[14px] gap-2">
                                    {Plans.map((ele, index) => {
                                        return (
                                            <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                                <Link
                                                    key={index}
                                                    to={`/${ele
                                                        .split(" ")
                                                        .join("-")
                                                        .toLowerCase()}`}
                                                >
                                                    {ele}
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className=" flex flex-col gap-3">
                                <h2 className=" font-semibold text-richblack-100">
                                    Community
                                </h2>
                                <div className="flex flex-col text-[14px] gap-2">
                                    {Community.map((ele, index) => {
                                        return (
                                            <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                                <Link
                                                    key={index}
                                                    to={`/${ele
                                                        .split(" ")
                                                        .join("-")
                                                        .toLowerCase()}`}
                                                >
                                                    {ele}
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Half */}
                <div className="w-[50%] flex-row border-l border-richblack-700">
                    <div className=" leading-[22px] w-[100%]">
                        <div className="text-richblack-400 flex lg:flex-row md:flex-col flex-nowrap items-start justify-center">
                            {FooterLinks.map((FooterLink, index) => {
                                return (
                                    <div
                                        className={`flex flex-col gap-3 w-[30%] ${
                                            index === 2 ? "" : ""
                                        }`}
                                        key={index}
                                    >
                                        <h2 className=" font-semibold text-richblack-100">
                                            {FooterLink.title}
                                        </h2>
                                        <div className="flex flex-col text-[14px] gap-2">
                                            {FooterLink.links.map(
                                                (link, index) => {
                                                    return (
                                                        <Link
                                                            to={link.link}
                                                            key={index}
                                                        >
                                                            {link.title}
                                                        </Link>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* Last line */}
            <div className="flex flex-row items-center w-[90%] justify-between h-[300px] text-richblack-400 text-sm border-t border-richblack-700 p-4">
                <div className="flex flex-row gap-3">
                    {BottomFooter.map((ele, index) => {
                        return (
                            <div
                                className={` pr-3 ${
                                    index === BottomFooter.length - 1
                                        ? ""
                                        : "border-r border-richblack-700"
                                }`}
                            >
                                {ele}
                            </div>
                        );
                    })}
                </div>
                <div>
                    <p>Mady by Tanishq © 2023 Studynotion</p>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
