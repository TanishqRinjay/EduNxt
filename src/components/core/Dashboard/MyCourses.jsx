import React from "react";
import IconBtn from "../../common/IconBtn";
import { BsPlusCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
import CourseTable from "./MyCourses/CourseTable";

const MyCourses = () => {
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const result = await fetchInstructorCourses(token);
            setCourses(result);
        };
        fetchCourses();
    }, []);
    console.log("Course: ", courses);

    return (
        <div className="text-richblack-5 w-full h-full flex items-center justify-center flex-col gap-5">
            <div className="flex w-full justify-between mb-5 font-medium">
                <h1 className="text-3xl text-richblack-5 ">My Courses</h1>
                <IconBtn
                    children={<BsPlusCircle />}
                    text="New"
                    customClasses={
                        "bg-yellow-50 text-richblack-900 flex items-center justify-center gap-2 rounded-lg px-5 py-2"
                    }
                    onclick={() => {
                        navigate("/dashboard/add-course");
                    }}
                ></IconBtn>
            </div>
            <CourseTable courses={courses} setCourses={setCourses}/>
            {/* <div className="w-full flex flex-col rounded-lg border-[1px] border-richblack-700">
                <div className="flex justify-between uppercase font-medium text-richblack-100 text-sm border-b-[1px] border-richblack-700 px-4 py-4">
                    <p>Courses</p>
                    <div className="flex gap-8">
                        <p>Duration</p>
                        <p>Price</p>
                        <p>Actions</p>
                    </div>
                </div>
                <div className="m-4">
                    {courses.length ? (
                        <CourseTable
                            courses={courses}
                            setCourses={setCourses}
                        />
                    ) : (
                        <div className="text-richblack-5 flex flex-col items-end">
                            <p className=" text-lg">
                                You did not have created any course.
                            </p>
                            <p className=" text-yellow-25">
                                Click on New on the top-right to create one.
                            </p>
                        </div>
                    )}
                </div>
            </div> */}
        </div>
    );
};

export default MyCourses;
