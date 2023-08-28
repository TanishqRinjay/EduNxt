import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import IconBtn from "../../common/IconBtn";
import { createRating } from "../../../services/operations/courseDetailsAPI";

const CourseReviewModal = ({ setReviewModal }) => {
    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const { courseEntireData } = useSelector((state) => state.viewCourse);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        setValue("courseExperience", "");
        setValue("courseRating", 0);
    }, []);

    const onSubmit = async (data) => {
        await createRating(
            {
                courseId: courseEntireData._id,
                rating: data.courseRating,
                review: data.courseExperience,
            },
            token
        );
        setReviewModal(false);
    };

    return (
        <div className="w-screen h-screen">
            <div>
                <div>
                    {/* Modal Heading */}
                    <p>Add a Review</p>
                    <button onClick={setReviewModal(false)}>
                        <MdClose />
                    </button>
                </div>
                {/* Modal Body */}
                <div>
                    <div>
                        <img
                            src={user?.image}
                            alt="Display image"
                            className=" aspect-square w-[50px] rounded-full object-cover"
                        />
                        <div>
                            <p>{`${user?.firstName} ${user?.lastName}`}</p>
                            <p>Posting Publicly</p>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col mt-6 items-center"
                    >
                        <ReactStars
                            count={5}
                            onChange={(currentValue) =>
                                setValue("courseRating", currentValue)
                            }
                            size={24}
                            activeColor="#ffd700"
                        />
                        <div>
                            <label htmlFor="courseExperience">
                                Enter a Review
                                <sup className=" text-pink-200">*</sup>
                            </label>
                            <textarea
                                id="courseExperience"
                                cols="30"
                                rows="10"
                                {...register("courseExperience", {
                                    required: true,
                                })}
                                className="min-h-[130px] w-full"
                            />
                            {errors.courseExperience && (
                                <span>Please add your experience</span>
                            )}
                        </div>

                        {/* Cancel and Save Button */}

                        <div>
                            <button
                                type="button"
                                className="bg-richblack-800 text-richblack-5 font-medium flex items-center justify-center gap-2 rounded-lg px-5 py-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.28)] hover:scale-95 transition-all duration-200 hover:shadow-none"
                                onClick={setReviewModal(false)}
                            >
                                Cancel
                            </button>
                            <IconBtn
                                customClasses={
                                    "bg-yellow-50 text-richblack-900 font-semibold flex items-center justify-center gap-2 rounded-lg px-5 py-3 shadow-[2px_2px_0px_0px_rgba(255,214,10,0.6)] hover:scale-95 transition-all duration-200 hover:shadow-none"
                                }
                                text={"Save"}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseReviewModal;
