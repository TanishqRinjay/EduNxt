import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI";
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from "../slices/viewCourseSlice";
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar";
import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal";

const ViewCourse = () => {
    const [reviewModal, setReviewModal] = useState(null);
    const courseId = useParams();
    const {token} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        const setCourseSpecificDetails = async ()=>{
            const courseData = await getFullDetailsOfCourse(courseId.courseId, token)
            dispatch(setCourseSectionData(courseData.courseDetails.courseContent))
            dispatch(setEntireCourseData(courseData.courseDetails))
            dispatch(setCompletedLectures(courseData.completedVideos))
            let lectures = 0;
            courseData?.courseDetails?.courseContent?.forEach((section)=>{
                lectures+= section.subSections.length
            })
            dispatch(setTotalNoOfLectures(lectures))
        }
        setCourseSpecificDetails()
    }, []);

    return (
        <div>
            <VideoDetailsSidebar setReviewModal={setReviewModal} />
            <div className="w-full overflow-auto">
                <div className="mx-auto w-[95%] max-w-[1000px] py-10">
                    <Outlet />
                </div>
            </div>
            {
                // reviewModal && <CourseReviewModal setReviewModal={setReviewModal}/>
            }
        </div>
    );
};

export default ViewCourse;
