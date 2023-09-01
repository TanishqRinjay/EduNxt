import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IoIosArrowDown,  IoIosArrowForward } from "react-icons/io";
import { updateCompletedLectures } from "../../../slices/viewCourseSlice";
import { markLectureAsComplete } from "../../../services/operations/courseDetailsAPI";
import CourseReviewModal from "./CourseReviewModal";
import { toast } from "react-hot-toast";

const VideoDetailsSidebar = ({ setReviewModal }) => {
    const {token} = useSelector((state)=>state.auth)
    const [loading, setLoading] = useState(false)
    const [activeStatus, setActiveStatus] = useState("");
    const [videoBarActive, setVideoBarActive] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const {courseId, sectionId, subSectionId } = useParams();
    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures,
    } = useSelector((state) => state.viewCourse);
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
            setVideoBarActive(activeSubSectionId);
        })();
    }, [courseSectionData, courseEntireData, location.pathname]);

    return (
        <div className="flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-2 text-white">
            <div className="flex flex-col">
                {/* For buttons and heading */}
                <div className="flex flex-col gap-2">
                    {/* for Buttons */}
                    <div className="flex justify-between pr-4">
                        <button
                            onClick={() =>
                                navigate("/dashboard/enrolled-courses")
                            }
                        >
                            <IoChevronBackCircleSharp className=" text-4xl" />
                        </button>
                        <IconBtn
                            customClasses={
                                "bg-yellow-50 text-richblack-900 font-semibold flex items-center justify-center gap-2 rounded-lg px-3 py-2 shadow-[2px_2px_0px_0px_rgba(255,214,10,0.6)] hover:scale-95 transition-all duration-200 hover:shadow-none"
                            }
                            onclick={() => {
                                setReviewModal(true);
                            }}
                            text={"Add Review"}
                        />
                    </div>
                    {/* for heading and title */}
                    <div className="p-1">
                        <p className=" text-xl font-medium">{courseEntireData?.courseName}</p>
                        <p className=" text-sm text-end">
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
                            className=" cursor-pointer"
                        >
                            <div className="flex justify-between items-center bg-richblack-900 px-5 py-4 border-y border-richblack-700 font-medium">
                                {activeStatus === section?._id ? (
                                    <IoIosArrowDown className="text-lg" />
                                ) : (
                                    <IoIosArrowForward className="text-lg" />
                                )}
                                <div className=" bg-richblack-900">{section?.sectionName}</div>
                            </div>
                            <div>
                                {activeStatus === section?._id && (
                                    <div>
                                        {section?.subSections.map(
                                            (lecture, i) => (
                                                <div
                                                    className={` flex justify-between p-3 border-y border-richblack-900 text-sm ${
                                                        videoBarActive ===
                                                        lecture._id
                                                            ? "bg-yellow-200 text-richblack-900"
                                                            : " bg-richblack-700 text-richblack-5"
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
