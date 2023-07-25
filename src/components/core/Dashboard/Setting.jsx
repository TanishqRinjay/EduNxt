import React, { useState } from "react";
import { useSelector } from "react-redux";
import IconBtn from "../../common/IconBtn";
import { FiUpload } from "react-icons/fi";
import { apiConnector } from "../../../services/apiconnector";
import {settingsEndpoints} from "../../../services/apis"

const Setting = () => {
    const { user } = useSelector((state) => state.profile);
    const [displayPicture, setDisplayPicture] = useState(user?.image)

    return (
        <div className="flex flex-col gap-5 w-full justify-center items-center">
            {/* <img src={displayPicture} alt="" /> */}
            <h1 className="text-3xl text-richblack-5 flex justify-start w-[80%] font-medium mb-5">
                Edit Profile
            </h1>
            <div className="flex flex-row justify-between w-[80%] items-center bg-richblack-800 p-6 border-richblack-700 border rounded-lg">
                <div className="flex items-center gap-4">
                    <img
                        src={displayPicture}
                        alt={`profile-${user?.firstName}`}
                        className=" aspect-square w-[78px] rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-2">
                        <p className=" font-medium text-richblack-25">
                            Change Profile Picture
                        </p>
                        <div className="flex gap-4">
                            <input
                                type="file"
                                name="displayPicture"
                                id="displayPicture"
                                accept=".jpg, .jpeg, .png, .gif"
                                // value={"displayPicture"}
                                onChange={(e)=>{console.log("image: ",e.target.files);setDisplayPicture(e.target.files[0])}}
                                hidden
                            />
                            <label
                                htmlFor="displayPicture"
                                className="bg-richblack-700 cursor-pointer border border-richblack-600 text-richblack-50 font-semibold flex items-center justify-center gap-2 rounded-lg px-5 py-2"
                            >
                                Select
                            </label>
                            <IconBtn
                                children={<FiUpload />}
                                text="Upload"
                                customClasses={
                                    "bg-yellow-50 text-richblack-900 font-semibold flex items-center justify-center gap-2 rounded-lg px-5 py-2 border border-yellow-5"
                                }
                                onclick={()=>{
                                    apiConnector("PUT", settingsEndpoints.UPDATE_DISPLAY_PICTURE_API, )
                                }}
                            ></IconBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;
