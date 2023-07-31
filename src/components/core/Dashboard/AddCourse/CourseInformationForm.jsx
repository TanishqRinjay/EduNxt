import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../services/operations/courseDetailsAPI";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

const CourseInformationForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const { course, editCourse } = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            setLoading(true);
            const categories = await fetchCourseCategories();
            console.log("ans:", categories);
            if (categories.length > 0) {
                setCourseCategories(categories);
            }
            setLoading(false);
        };

        if (editCourse) {
            setValue("courseTitle", course.courseName);
            setValue("courseShortDesc", course.courseDescription);
            setValue("coursePrice", course.price);
            setValue("courseTags", course.tag);
            setValue("courseBenefits", course.WhatYouWillLearn);
            setValue("courseCategory", course.category);
            setValue("courseImage", course.thumbnail);
        }

        getCategories();
    }, []);

    const onSubmit = async (data) => {};

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-white rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8"
        >
            <div>
                <label htmlFor="courseTitle">
                    Course Title<sup className=" text-pink-200">*</sup>
                </label>
                <input
                    type="courseTitle"
                    placeholder="Enter Course Title"
                    {...register("courseTitle", { required: true })}
                    style={{
                        boxShadow:
                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                />
                {errors.courseTitle && <span>Course Title is required.</span>}
            </div>
            <div>
                <label htmlFor="courseShortDesc">
                    Course Description<sup className="text-pink-200">*</sup>
                </label>
                <textarea
                    id="courseShortDesc"
                    placeholder="Enter Description"
                    {...register("courseShortDesc", { required: true })}
                    style={{
                        boxShadow:
                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5 min-h-[140px]"
                />
                {errors.courseShortDesc && (
                    <span>Course Description is required.</span>
                )}
            </div>
            <div className="relative">
                <label htmlFor="coursePrice">
                    Course Price<sup className=" text-pink-200">*</sup>
                </label>
                <input
                    type="coursePrice"
                    placeholder="Enter Price"
                    {...register("coursePrice", {
                        required: true,
                        valueAsNumber: true,
                    })}
                    style={{
                        boxShadow:
                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-700 py-[12px] px-[40px] text-richblack-5 "
                />
                <HiOutlineCurrencyRupee className="absolute top-[51%] left-3 text-xl text-richblack-400" />
                {errors.coursePrice && <span>Course Price is required.</span>}
            </div>
            <div className="flex flex-col ">
                <label htmlFor="courseCategory">
                    Course Categories<sup className="text-pink-200">*</sup>
                </label>
                <select
                    style={{
                        boxShadow:
                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full focus:outline focus:ring-0 focus:outline-yellow-50 rounded-[0.5rem] bg-richblack-700 p-[14px] border-r-[16px] border-transparent text-richblack-5"
                    id="courseCategory"
                    defaultValue={""}
                    {...register("courseCategory", { required: true })}
                >
                    <option value="" disabled>
                        Choose a Category
                    </option>
                    {!loading &&
                        courseCategories.map((category, i) => (
                            <option key={i} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                </select>
                {errors.courseCategories && (
                    <span>Course Category is required</span>
                )}
            </div>

            {/* Tags Input */}

            {/* <ChipInput
                label="Tags"
                name="courseTags"
                placeholder="Enter tags and press enter"
                register={register}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
            /> */}

            {/* Thumbnail upload Component */}

            {/* <Upload
                name={}
                label={"Course Thumbnail"}
                register={}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
            /> */}

            <div>
                <label htmlFor="courseShortDesc">
                Benefits of the course<sup className="text-pink-200">*</sup>
                </label>
                <textarea
                    id="courseShortDesc"
                    placeholder="Enter Benefits of the course"
                    {...register("courseShortDesc", { required: true })}
                    style={{
                        boxShadow:
                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5 min-h-[140px]"
                />
                {errors.courseShortDesc && (
                    <span>Course Description is required.</span>
                )}
            </div>

            <div>
                <label htmlFor="courseShortDesc">
                Requirements/Instructions<sup className="text-pink-200">*</sup>
                </label>
                <textarea
                    id="courseShortDesc"
                    placeholder="Enter Requirements for the course"
                    {...register("courseShortDesc", { required: true })}
                    style={{
                        boxShadow:
                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5 min-h-[140px]"
                />
                {errors.courseShortDesc && (
                    <span>Course Description is required.</span>
                )}
            </div>
        </form>
    );
};

export default CourseInformationForm;
