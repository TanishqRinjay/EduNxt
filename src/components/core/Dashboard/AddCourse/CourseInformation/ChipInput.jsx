import React from "react";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const ChipInput = ({ label, name, register, setValue }) => {
    const [tag, setTag] = useState("");
    const [tagsList, setTagsList] = useState(["HTML", "WEB"]);

    useEffect(() => {
        register(name, {
            required: true,
            validate: (value) => value.length > 0,
        });
    }, []);

    useEffect(() => {
        setValue(name, tagsList);
    }, [tagsList]);

    const handleAddTags = (e) => {};

    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-sm">
                {label}
                <sup className=" text-pink-200">*</sup>
            </label>
            <input
                type="text"
                onChange={(e) => handleAddTags()}
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-700 p-[10px] mb-2 text-richblack-5"
            />
            {
                <div className="flex gap-2">
                    {tagsList.map((item, i) => (
                        <span className="flex items-center justify-center text-xs gap-1 bg-yellow-50 rounded-full px-2 py-1 text-richblack-900 cursor-pointer">
                            {item}
                            <RxCross2 />
                        </span>
                    ))}
                </div>
            }
        </div>
    );
};

export default ChipInput;
