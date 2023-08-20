import React from "react";
import {IoIosArrowDown} from "react-icons/io"
import {MdOutlineArrowRight} from "react-icons/md"

const CourseContent = ({ course }) => {
    const subSectionLength = () => {
        const totalSubSections = course?.courseContent.reduce(
            (acc, section) => acc + section?.subSections?.length,
            0
        );
        return totalSubSections;
    };
    const lectures = ["lecture 1", "lecture 2", "lecture 3", "lecture 4"]

    return (
        <div className="w-[80%]">
            <div className="flex flex-col gap-2 justify-start w-[65%]">
                <h2 className="text-2xl font-bold">Course Content</h2>
                <div>
                    <p className=" text-sm">
                        {course?.courseContent?.length} section(s){" "}
                        {subSectionLength()} lecture(s){" "}
                        {`(Video length in sec)`} total length
                    </p>
                </div>
                <div className="">
                    {course?.courseContent.map((section, i) => (
                        <details className=" bg-richblack-700 p-4">
                            <summary className="flex justify-between text-sm cursor-pointer">
                                <p className="flex items-center justify-center gap-2"><IoIosArrowDown className="text-base"/>{section?.sectionName}</p>
                                <p className=" text-yellow-25">{section?.subSections?.length} lecture(s)</p>
                            </summary>
                            <div className="mt-2 ml-10 text-sm">
                                {
                                    lectures.map((subSection, i)=>(
                                        <div className="mb-1 flex items-center">
                                            <MdOutlineArrowRight/>
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
