import React, { useState } from "react";
import CTAButton from "../components/core/HomePage/CTAButton";
import SigninInput from "../components/core/LoginPage/SigninInput";
import frame from "../assets/Images/frame.png";
import login from "../assets/Images/signup.webp";

const Signup = () => {
    const [user, setUser] = useState("student");
    return (
        <div className=" my-10 md:my-0 flex lg:text-[14px] md:text-[14px] sm:text-[12px] lg:flex-row flex-col-reverse lg:gap-0 gap-10 items-center justify-center md:w-[95vw] md:h-[95vh]">
            <div className="flex flex-col lg:w-[50%] w-full justify-center items-center">
                <div className="flex flex-col gap-5 sm:w-[60%] w-[90%]">
                    <h1 className=" text-richblack-5 text-3xl font-semibold">
                        Welcome
                    </h1>
                    <div className=" text-lg">
                        <p className=" text-richblack-100">
                            Build skills for today, tomorrow, and beyond.
                        </p>
                        <p className=" font-edu-sa italic font-bold leading-[26px] text-base text-blue-100">
                            Education to future-proof your career.
                        </p>
                    </div>
                    <form className="flex flex-col gap-5 lg:text-[16px] text-[10px] text-richblack-5">
                        <div className="my-3 flex flex-row items-center justify-center bg-richblack-800 px-1 py-1 max-w-min rounded-full text-richblack-5 gap-4 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.28)]">
                            <div
                                onClick={() => setUser("student")}
                                className={`${
                                    user === "student"
                                        ? "bg-richblack-900"
                                        : "text-richblack-200"
                                } px-4 py-2 cursor-pointer rounded-full`}
                            >
                                Student
                            </div>
                            <div
                                onClick={() => setUser("instructor")}
                                className={`${
                                    user === "instructor"
                                        ? "bg-richblack-900"
                                        : "text-richblack-200"
                                } px-4 py-2 cursor-pointer rounded-full`}
                            >
                                Instructor
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <SigninInput
                                label={"First Name"}
                                placeholder={"Enter First Name"}
                                type={"text"}
                            />
                            <SigninInput
                                label={"Last Name"}
                                placeholder={"Enter Last Name"}
                                type={"text"}
                            />
                        </div>
                        <SigninInput
                            label={"Email Address"}
                            placeholder={"Enter email address"}
                            type={"email"}
                        />
                        <div className="flex flex-row gap-4">
                            <SigninInput
                                label={"Create Password"}
                                placeholder={"Enter password"}
                                type={"password"}
                            />
                            <SigninInput
                                label={"Confirm Password"}
                                placeholder={"Confirm password"}
                                type={"password"}
                            />
                        </div>

                        <CTAButton active={true} shadow={true}>
                            Sign Up
                        </CTAButton>
                    </form>
                </div>
            </div>
            <div className="lg:w-[50%] flex justify-center items-center ">
                <div className=" md:w-[60%] w-[80%] relative">
                    <img src={frame} alt="frame" className="" />
                    <img
                        src={login}
                        alt="loginImage"
                        className="absolute md:-top-4 md:-left-4 -top-2 -left-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
