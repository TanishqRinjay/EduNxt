import React from "react";
import instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

const Instructor = () => {
    return (
        <div className="mt-16">
            <div className=" flex flex-row gap-20 items-center">
                <div className=" w-[50%]">
                    <img
                        src={instructor}
                        alt="instructorImage"
                        className=" shadow-[-20px_-20px_0px_0px_#FFF]"
                    />
                </div>
                <div className=" flex flex-col w-[50%] justify-center gap-10">
                    <div className=" text-4xl font-semibold justify-center">
                        <h2>Become an</h2>
                        <HighlightText text={"instructor"}></HighlightText>
                    </div>
                    <p className=" text-richblack-300 font-medium w-[82%]">
                        Instructors from around the world teach millions of
                        students on StudyNotion. We provide the tools and skills
                        to teach what you love.
                    </p>
                    <div className="w-fit mt-2">
                        <CTAButton
                            active={true}
                            shadow={false}
                            linkto={"/signup"}
                            clas
                        >
                            <div className="flex flex-row justify-center items-center gap-2">
                                Start Teaching Today
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;
