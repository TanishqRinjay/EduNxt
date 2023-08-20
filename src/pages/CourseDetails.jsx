import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import { buyCourse } from "../services/operations/studentFeaturesAPI";
import { useDispatch, useSelector } from "react-redux";
import CourseFloatingCard from "../components/core/CourseDetails/CourseFloatingCard";
import RatingStars from "../components/common/RatingStars";
import getAvgRating from "../utils/avgRating";
import { BiTime } from "react-icons/bi";
import CourseContent from "../components/core/CourseDetails/CourseContent";

const CourseDetails = () => {
    const { courseId } = useParams();
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState(null);
    const [avgReviewCount, setAvgReviewCount] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
    useEffect(() => {
        if (course) {
            const count = getAvgRating(course?.ratingAndReviews);
            setAvgReviewCount(count);
        }
    }, [course]);
    const handleBuyCourse = () => {
        if (token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }
    };
    const handleAddToCart = () => {};

    return (
        <div className=" text-richblack-5 flex flex-col items-center justify-center">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="bg-richblack-800 flex justify-center items-center w-full">
                    <div className="flex flex-col w-[80%] my-8">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-3 w-[60%]">
                                <p className=" text-sm text-richblack-300">
                                    Home / Courses /{" "}
                                    <span className=" text-yellow-50 font-medium">
                                        {course?.category?.name}
                                    </span>
                                </p>
                                <div className="my-10 flex flex-col gap-3">
                                    <h1 className=" text-3xl font-medium w-full">
                                        {course?.courseName}
                                    </h1>
                                    <p className=" text-richblack-200 w-full">
                                        {course?.courseDescription}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-yellow-100 font-semibold">
                                            {avgReviewCount || 0}
                                        </span>
                                        <RatingStars
                                            Review_Count={avgReviewCount}
                                        />
                                        <span className=" text-richblack-400">
                                            ({course?.ratingAndReviews?.length}{" "}
                                            Reviews)
                                        </span>
                                        <span className=" text-richblack-100">
                                            {course?.studentsEnrolled?.length}{" "}
                                            Student(s) Enrolled
                                        </span>
                                    </div>
                                    <div className=" text-richblack-50 font-medium text-sm">
                                        Created by{" "}
                                        {`${course?.instructor?.firstName} ${course?.instructor?.lastName}`}
                                    </div>
                                    <div className="flex gap-1 items-center text-sm text-richblack-100">
                                        <BiTime />
                                        Created at May 27, 2023 | 0:56 AM
                                    </div>
                                </div>
                            </div>
                            <CourseFloatingCard
                                course={course}
                                handleBuyCourse={handleBuyCourse}
                                handleAddToCart={handleAddToCart}
                                courseId={courseId}
                                user={user}
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="flex w-[80%] justify-start">
                <div className="my-6 border p-6 border-richblack-700 w-[65%] flex flex-col gap-4">
                    <p className="text-2xl font-bold">What you'll learn</p>
                    <p>{course?.whatYouWillLearn}</p>
                </div>
            </div>
            <CourseContent course={course}/>
        </div>
    );
};

export default CourseDetails;
