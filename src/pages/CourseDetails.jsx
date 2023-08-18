import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import IconBtn from "../components/common/IconBtn";

const CourseDetails = () => {
    const { courseId } = useParams();
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const getCourse = async () => {
            const response = await fetchCourseDetails(courseId);
            if (!response) {
                console.log("Error in fetching course data");
            }
            console.log("response:", response.data);
            setCourse(response.data);
        };
        setLoading(true);
        getCourse();
        setLoading(false);
    }, []);

    const handleBuyCourse = () => {};
    const handleAddToCart = () => {};

    return (
        <div className=" text-richblack-5 flex items-center justify-center">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="bg-richblack-800 flex justify-center items-center w-full">
                    <div className="flex flex-col w-[80%] my-8">
                        <div className="flex">
                            <div className="flex flex-col gap-3 w-[70%]">
                                <p className=" text-sm text-richblack-300">
                                    Home / Courses /{" "}
                                    <span className=" text-yellow-50 font-medium">
                                        {course?.category?.name}
                                    </span>
                                </p>
                                <h1 className=" text-3xl font-medium">
                                    {course?.courseName}
                                </h1>
                                <p className=" text-richblack-200">
                                    {course?.courseDescription}
                                </p>
                            </div>
                            <div className="w-[30%] relative">
                                <div className="flex flex-col bg-richblack-700 rounded-lg absolute">
                                    <img
                                        src={course?.thumbnail}
                                        alt=""
                                        className=" rounded-t-lg object-cover"
                                    />
                                    <div className="flex flex-col m-6 gap-4">
                                        <p className=" text-2xl font-bold">
                                            Rs. {course?.price.toString()}
                                        </p>

                                        <IconBtn
                                            customClasses={
                                                "bg-yellow-50 text-richblack-900 font-semibold flex items-center justify-center gap-2 rounded-lg px-5 py-3 shadow-[2px_2px_0px_0px_rgba(255,214,10,0.6)] hover:scale-95 transition-all duration-200 hover:shadow-none"
                                            }
                                            onclick={handleAddToCart}
                                            text={"Buy Now"}
                                        />
                                        <IconBtn
                                            customClasses={
                                                "bg-richblack-800 text-richblack-5 font-medium flex items-center justify-center gap-2 rounded-lg px-5 py-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.28)] hover:scale-95 transition-all duration-200 hover:shadow-none"
                                            }
                                            onclick={handleAddToCart}
                                            text={"Add to cart"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseDetails;
