import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HightlightText from "../components/core/HomePage/HightlightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import Banner from "../assets/Images/banner.mp4";

const Home = () => {
    return (
        <div>
            {/* Section 1 */}
            <div className=" relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between text-white">
                <Link to={"/signup"}>
                    <div className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-medium text-[16px] text-richblack-200 transition-all duration-200 w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] border-richblack-800 hover:scale-95 hover:drop-shadow-none">
                        <div className=" flex flex-row gap-2 items-center rounded-full px-[18px] py-[6px] duration-200 transition-all group-hover:bg-richblack-900">
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>
                <div className=" text-center text-4xl font-semibold mt-7">
                    Empower Your Future with
                    <HightlightText text={"Coding Skills"}></HightlightText>
                </div>

                <div className=" text-richblack-300 font-medium text-lg w-[90%] mt-4 text-center">
                    With our online coding courses, you can learn at your own
                    pace, from anywhere in the world, and get access to a wealth
                    of resources, including hands-on projects, quizzes, and
                    personalized feedback from instructors.
                </div>

                <div className=" flex flex-row mt-12 gap-6">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn more!
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a demo
                    </CTAButton>
                </div>

                <div className="mt-16  shadow-[0px_-5px_40px_-7px_#4299e1]">
                    <video
                        muted
                        autoPlay
                        loop
                        src={Banner}
                        type="video/mp4"
                        className="h-[90vh] shadow-[20px_20px_0px_0px_#F5F5F5]"
                    ></video>
                </div>

                <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className=" text-4xl font-semibold">
                            Unlock your
                            <HightlightText
                                text={" coding potential "}
                            ></HightlightText>
                            with our online courses.
                        </div>
                    }
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={{
                        btnText: "Try it Yourself",
                        linkto: "/signup",
                        active: true,
                    }}
                    ctabtn2={{
                        btnText: "Learn More",
                        linkto: "/login",
                        active: false,
                    }}
                    codeblock={`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>Document</title>
                    </head>
                    <body>
                        <h1>Let's Learn</h1>
                        <h2>HTML</h2>
                    </body>
                    </html>`}
                    codeColor="text-yellow-25"
                ></CodeBlocks>
            </div>

            {/* Section 2 */}
            {/* Section 3 */}
            {/* Footer */}
        </div>
    );
};

export default Home;
