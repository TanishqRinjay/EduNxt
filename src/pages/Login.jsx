import React, { useState } from "react";
import CTAButton from "../components/core/HomePage/CTAButton";
import SigninInput from "../components/core/LoginPage/SigninInput";
import frame from "../assets/Images/frame.png";
import login from "../assets/Images/login.webp";
import { Link } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState("student");
    return (
        <div className=" flex lg:flex-row flex-col items-center justify-center w-[95vw] h-[95vh]">
            <div className="flex flex-col lg:w-[50%] w-full justify-center items-center">
                <div className="flex flex-col gap-5 md:w-[60%] w-[80%]">
                    <h1 className=" text-richblack-5 text-3xl font-semibold">
                        Welcome Back
                    </h1>
                    <div className=" text-lg">
                        <p className=" text-richblack-100">
                            Build skills for today, tomorrow, and beyond.
                        </p>
                        <p className=" font-edu-sa italic font-bold leading-[26px] text-base text-blue-100">
                            Education to future-proof your career.
                        </p>
                    </div>
                    <form className="flex flex-col gap-5 text-richblack-5">
                        <div className="my-5 flex flex-row items-center justify-center bg-richblack-800 px-1 py-1 max-w-min rounded-full text-richblack-5 gap-4 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.28)]">
                            <div
                                onClick={() => setUser("student")}
                                className={`${
                                    user === "student"
                                        ? "bg-richblack-900"
                                        : "text-richblack-200"
                                } px-6 py-2 cursor-pointer rounded-full`}
                            >
                                Student
                            </div>
                            <div
                                onClick={() => setUser("instructor")}
                                className={`${
                                    user === "instructor"
                                        ? "bg-richblack-900"
                                        : "text-richblack-200"
                                } px-6 py-2 cursor-pointer rounded-full`}
                            >
                                Instructor
                            </div>
                        </div>
                        <SigninInput
                            label={"Email"}
                            placeholder={"Enter Email ID"}
                            type={"email"}
                        />
                        <SigninInput
                            label={"Password"}
                            placeholder={"Enter Password"}
                            type={"password"}
                        ></SigninInput>
                        <Link
                            to="/forget-password"
                            className="flex justify-end text-xs font-normal -mt-3 text-blue-100"
                        >
                            Forgot Password
                        </Link>
                        <CTAButton active={true}>Sign In</CTAButton>
                    </form>
                </div>
            </div>
            <div className="w-[50%] flex justify-center items-center ">
                <div className=" w-[60%] relative">
                    <img src={frame} alt="frame" className="" />
                    <img
                        src={login}
                        alt="loginImage"
                        className="absolute -top-4 -left-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
