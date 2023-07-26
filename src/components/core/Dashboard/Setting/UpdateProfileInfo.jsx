import React, { useState } from "react";
import { useSelector } from "react-redux";

const UpdateProfileInfo = () => {
    const { user } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        gender: null,
        phoneNumber: null,
        about: null,
    });
    const date = new Date()
    console.log(`${date.getFullYear().toString()}-${date.getMonth().toString()}-${date.getDate().toString()}`);

    const { firstName, lastName, dateOfBirth, gender, phoneNumber, about } =
        formData;

    const handleOnChange = (e) => {
        e.target.name = e.target.value;
    };

    return (
        <div className="flex flex-col gap-5 justify-between w-[80%] bg-richblack-800 py-6 px-12 border-richblack-700 border rounded-lg">
            <h1 className=" text-richblack-5 text-lg font-semibold">
                Profile Information
            </h1>
            <div className="flex gap-[4%] ">
                <label className="w-[48%]">
                    <p className="mb-1 text-richblack-5 text-sm">First Name</p>
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleOnChange}
                        placeholder={user?.firstName || "First Name"}
                        style={{
                            boxShadow:
                                "inset 0px -1px 0px rgba(255, 255, 255, 0.3)",
                        }}
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                    />
                </label>
                <label className="w-[48%]">
                    <p className="mb-1 text-richblack-5 text-sm">Last Name</p>
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleOnChange}
                        placeholder={user?.lastName || "Last Name"}
                        style={{
                            boxShadow:
                                "inset 0px -1px 0px rgba(255, 255, 255, 0.3)",
                        }}
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                    />
                </label>
            </div>

            {/* Comment */}

            <div className="flex gap-[4%] ">
                <label className="w-[48%]">
                    <p className="mb-1 text-richblack-5 text-sm">First Name</p>
                    <input
                        required
                        type="date"
                        name="firstName"
                        min="2002-06-18"
                        max={`${date.getFullYear().toString()}-${date.getMonth().toString()}-${date.getDate().toString()}`}
                        value={firstName}
                        onChange={handleOnChange}
                        placeholder={user?.firstName || "First Name"}
                        style={{
                            boxShadow:
                                "inset 0px -1px 0px rgba(255, 255, 255, 0.3)",
                        }}
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                    />
                </label>
                <label className="w-[48%]">
                    <p className="mb-1 text-richblack-5 text-sm">Last Name</p>
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleOnChange}
                        placeholder={user?.lastName || "Last Name"}
                        style={{
                            boxShadow:
                                "inset 0px -1px 0px rgba(255, 255, 255, 0.3)",
                        }}
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                    />
                </label>
            </div>
        </div>
    );
};

export default UpdateProfileInfo;
