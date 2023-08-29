import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import CourseReviewModal from "./CourseReviewModal";

const VideoDetailsSidebar = ({ setReviewModal }) => {
    const [activeStatus, setActiveStatus] = useState("");
    const [videoBarActive, setVideoBarActive] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { sectionId, subSectionId } = useParams();
    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures,
    } = useSelector((state) => state.viewCourse);
    // console.log("Course Entire data: ", courseEntireData)
    useEffect(() => {
        (() => {
            if (!courseSectionData.length) return;
            const currentSectionIndex = courseSectionData.findIndex(
                (data) => data._id === sectionId
            );
            const currentSubSectionIndex = courseSectionData?.[
                currentSectionIndex
            ]?.subSections.findIndex((data) => data._id === subSectionId);
            const activeSubSectionId =
                courseSectionData[currentSectionIndex]?.subSections[
                    currentSubSectionIndex
                ]._id;
            //Setting current section here
            setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
            //Setting current SubSection here
            setVideoBarActive(courseSectionData?.[activeSubSectionId]);
        })();
    }, [courseSectionData, courseEntireData, location.pathname]);

    return (
        <div className=" text-richblack-5">
            <div className="flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
                {/* For buttons and heading */}
                <div>
                    {/* for Buttons */}
                    <div>
                        <button
                            onClick={() =>
                                navigate("/dashboard/enrolled-courses")
                            }
                        >
                            <IoChevronBackCircleSharp />
                        </button>
                        <IconBtn
                            customClasses={
                                "bg-yellow-50 text-richblack-900 font-semibold flex items-center justify-center gap-2 rounded-lg px-5 py-3 shadow-[2px_2px_0px_0px_rgba(255,214,10,0.6)] hover:scale-95 transition-all duration-200 hover:shadow-none"
                            }
                            onclick={() => {
                                setReviewModal(true);
                            }}
                            text={"Add Review"}
                        />
                    </div>
                    {/* for heading and title */}
                    <div>
                        <p>{courseEntireData?.courseName}</p>
                        <p>
                            {completedLectures?.length}/{totalNoOfLectures}
                        </p>
                    </div>
                </div>
                {/* For Sections and Sub Sections */}
                <div>
                    {/* We're mapping for creating sections */}
                    {courseSectionData?.map((section, index) => (
                        <div
                            onClick={() => setActiveStatus(section._id)}
                            key={index}
                        >
                            <div>
                                <div>{section?.sectionName}</div>
                                {activeStatus === section?._id ? (
                                    <IoIosArrowDown />
                                ) : (
                                    <IoIosArrowBack />
                                )}
                            </div>
                            <div>
                                {activeStatus === section?._id && (
                                    <div>
                                        {section?.subSections.map(
                                            (lecture, i) => (
                                                <div
                                                    className={` flex justify-between p-4 ${
                                                        videoBarActive ===
                                                        lecture._id
                                                            ? "bg-yellow-200 text-richblack-900"
                                                            : " bg-richblack-900 text-richblack-5"
                                                    }`}
                                                    key={i}
                                                    onClick={() => {
                                                        navigate(
                                                            `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${lecture._id}`
                                                        );
                                                        setVideoBarActive(
                                                            lecture?._id
                                                        );
                                                    }}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={completedLectures.includes(
                                                            lecture._id
                                                        )}
                                                        onChange={() => {}}
                                                    />
                                                    <span>{lecture.title}</span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoDetailsSidebar;
