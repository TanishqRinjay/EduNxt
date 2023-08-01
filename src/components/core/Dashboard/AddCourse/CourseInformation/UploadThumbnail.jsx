import React from "react";
import { useState, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";
import {AiOutlineRedo} from 'react-icons/ai'

const UploadThumbnail = ({
    name,
    label,
    register,
    errors,
    setValue,
    getValues,
}) => {
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);

    const handleThumbnailUpload = (e) => {
        setThumbnailPreview(URL.createObjectURL(e.target.files[0]));
        setThumbnail(e.target.files[0]);
    };

    useEffect(()=>{
        register(name, {
            required: true,
        })
    },[])

    useEffect(()=>{
        setValue(name, thumbnail)
    }, [thumbnail])

    return (
        <div>
            <h3 className="text-sm">
                {label}
                <sup className="text-pink-200">*</sup>
            </h3>
            <div className=" bg-richblack-700 border border-dashed border-richblack-600 rounded-lg py-8 px-3 h-[250px]">
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .gif"
                    id={name}
                    className=" hidden"
                    onChange={handleThumbnailUpload}
                />
                {thumbnailPreview ? (
                    <div className="h-full w-full flex flex-col justify-start items-center gap-3">
                        <img src={thumbnailPreview} className="h-[90%]" />
                        <label htmlFor={name} className="flex items-center justify-center bg-richblack-5 text-yellow-900 font-medium cursor-pointer px-2 gap-1 rounded-full"><AiOutlineRedo/>Re-Upload</label>
                    </div>
                ) : (
                    <div className="w-full h-full flex justify-center items-center flex-col">
                        <label
                            htmlFor={name}
                            className="text-yellow-50 text-2xl bg-pure-greys-800 rounded-full p-3 cursor-pointer"
                        >
                            <FiUploadCloud />
                        </label>
                        <p className=" text-xs font-semibold text-richblack-200 w-[50%] text-center">
                            Drag and drop an image, or{" "}
                            <label
                                htmlFor={name}
                                className="cursor-pointer text-yellow-50"
                            >
                                Browse
                            </label>{" "}
                            Max 6MB each (12MB for videos)
                        </p>
                        <ul className="text-xs font-semibold text-richblack-400 list-disc flex gap-12 mt-12">
                            <li>Aspect ratio 16:9</li>
                            <li>Recommended size 1024x576</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadThumbnail;
