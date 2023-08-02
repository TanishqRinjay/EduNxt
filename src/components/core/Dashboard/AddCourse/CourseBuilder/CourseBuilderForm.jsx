import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IconBtn from "../../../../common/IconBtn";

const CourseBuilderForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const [editSectionName, setEditSectionName] = useState(null);
    return (
        <div>
            <h2>Course Builder</h2>
            <form>
                <div>
                    <label htmlFor="" className="text-sm">
                        Section Name<sup className="text-pink-200">*</sup>
                    </label>
                    <input
                        type="text"
                        id="sectionName"
                        placeholder="Add section name"
                        {...register("sectionName", { required: true })}
                    />
                    {errors.sectionValue && (
                        <span>Section name is required.</span>
                    )}
                </div>
                <IconBtn
                    text={
                        editSectionName ? "Edit Section Name" : "Create Section"
                    }
                    outline={true}
                    customClasses={
                        "bg-richblack-800 text-yellow-50 font-medium flex items-center justify-center gap-2 rounded-lg px-5 py-2 outline outline-1 mt-10 outline-yellow-50"
                    }
                />
            </form>
        </div>
    );
};

export default CourseBuilderForm;
