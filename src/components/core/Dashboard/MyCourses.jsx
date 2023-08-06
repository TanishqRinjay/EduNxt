import React from "react";
import IconBtn from "../../common/IconBtn";
import {BsPlusCircle} from "react-icons/bs"
import { useNavigate } from "react-router-dom";

const MyCourses = () => {

    const navigate = useNavigate()

    return (
        <div className="text-richblack-5 w-full h-full flex items-center justify-center flex-col gap-5">
            <div className="flex w-[80%] justify-between mb-5 font-medium">
                <h1 className="text-3xl text-richblack-5 ">
                    My Courses
                </h1>
                <IconBtn
                    children={<BsPlusCircle />}
                    text="New"
                    customClasses={
                        "bg-yellow-50 text-richblack-900 flex items-center justify-center gap-2 rounded-lg px-5 py-2"
                    }
                    onclick={() => {
                        navigate("/dashboard/settings");
                    }}
                ></IconBtn>
            </div>
            <div className="flex flex-row justify-between w-[80%] items-center bg-richblack-800 p-6 border-richblack-700 border rounded-lg"></div>
        </div>
    );
};

export default MyCourses;
