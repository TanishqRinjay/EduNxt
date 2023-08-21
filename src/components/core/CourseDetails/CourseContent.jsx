import React from "react";
import {IoIosArrowDown} from "react-icons/io"
import {BsCameraVideo} from "react-icons/bs"

const CourseContent = ({ course, totalDuration }) => {
    const subSectionLength = () => {
        const totalSubSections = course?.courseContent.reduce(
            (acc, section) => acc + section?.subSections?.length||0,
            0
        );
        return totalSubSections;
    };
    const lectures = ["lecture 1", "lecture 2", "lecture 3", "lecture 4"]
    console.log("total Duration",course)
    return (
        <div className="w-[80%]">
            <div className="flex flex-col gap-2 justify-start w-[65%]">
                <h2 className="text-2xl font-bold">Course Content</h2>
                <div>
                    <p className=" text-sm">
                        {course?.courseContent?.length} section(s){" "}
                        {subSectionLength()} lecture(s){" "}
                        {`${totalDuration}sec`} total length
                    </p>
                </div>
                <div className="">
                    {course?.courseContent.map((section, i) => (
                        <details className=" bg-richblack-700 transition-all duration-200" key={i}>
                            <summary className="flex justify-between text-sm cursor-pointer p-4">
                                <p className="flex items-center justify-center gap-2"><IoIosArrowDown className="text-base"/>{section?.sectionName}</p>
                                <p className=" text-yellow-25">{section?.subSections?.length} lecture(s)</p>
                            </summary>
                            <div className=" bg-richblack-900 text-sm mx-[0.4px]">
                                {
                                    lectures.map((subSection, i)=>(
                                        <div key={i} className=" pl-8 flex items-center gap-1 p-4 border-x border-b border-richblack-400">
                                            <BsCameraVideo className="text-xs"/>
                                            {
                                                subSection
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseContent;
