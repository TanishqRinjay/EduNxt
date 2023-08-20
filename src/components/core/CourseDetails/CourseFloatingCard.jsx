import React from "react";
import IconBtn from "../../common/IconBtn";
import { FaShareSquare } from "react-icons/fa";
import RatingStars from "../../common/RatingStars";
import getAvgRating from "../../../utils/avgRating";

const CourseFloatingCard = ({course, handleAddToCart, handleBuyCourse, user, courseId}) => {
    
    return (
        <div className="w-[32%] relative">
            <div className="flex flex-col bg-richblack-700 rounded-lg absolute">
                <img
                    src={course?.thumbnail}
                    alt=""
                    className=" rounded-t-lg object-cover"
                />
                {user?.courses.includes(courseId) ? (
                    <div className="flex flex-col m-6 gap-4">
                        <p className=" text-2xl font-bold">
                            Rs. {course?.price.toString()}
                        </p>

                        <IconBtn
                            customClasses={
                                "bg-yellow-50 text-richblack-900 font-semibold flex items-center justify-center gap-2 rounded-lg px-5 py-3 shadow-[2px_2px_0px_0px_rgba(255,214,10,0.6)] hover:scale-95 transition-all duration-200 hover:shadow-none"
                            }
                            onclick={handleBuyCourse}
                            text={"Go to Course"}
                        />
                        <div>
                            <p className="text-xl font-semibold">
                                This course includes:{" "}
                            </p>
                        </div>
                        <button className="flex gap-1 w-full justify-center items-center my-2 font-medium text-yellow-50">
                            <FaShareSquare /> Share
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col m-6 gap-4">
                        <p className=" text-2xl font-bold">
                            Rs. {course?.price.toString()}
                        </p>

                        <IconBtn
                            customClasses={
                                "bg-yellow-50 text-richblack-900 font-semibold flex items-center justify-center gap-2 rounded-lg px-5 py-3 shadow-[2px_2px_0px_0px_rgba(255,214,10,0.6)] hover:scale-95 transition-all duration-200 hover:shadow-none"
                            }
                            onclick={handleBuyCourse}
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
                )}
            </div>
        </div>
    );
};

export default CourseFloatingCard;
