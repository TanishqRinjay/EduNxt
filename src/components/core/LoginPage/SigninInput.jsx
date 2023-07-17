import React, { useState } from "react";
import {BsEyeFill, BsEyeSlashFill} from "react-icons/bs"

const SigninInput = ({label, placeholder, type}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [buttonType, setButtonType] = useState(type)
    function passwordHandler(){
        setShowPassword(!showPassword)
        setButtonType(buttonType==="text"?"password":"text")
    }
    return (
        <label className="w-full relative">
            <div className="flex items-center gap-1">
                <p className="md:text-[12px] lg:text-[16px] mb-1">{label}</p>
                <sup className=" text-pink-200">*</sup>
            </div>
            <input
            required
                className=" bg-richblack-800 p-3 rounded-md outline-none w-full shadow-[0px_1px_0px_0px_rgba(255,255,255,0.28)]"
                placeholder={placeholder}
                type={buttonType}
            />
            {
            type==="password"? <div><BsEyeFill onClick={()=>passwordHandler()} className={`${showPassword? "hidden":""} text-richblack-300 absolute right-3 cursor-pointer top-[calc(50%+5px)] lg:top-[56%]`} />
            <BsEyeSlashFill onClick={()=>passwordHandler()} className={`${showPassword? "":"hidden"} text-richblack-300 absolute right-3 cursor-pointer top-[56%]`}/></div>
            :
            ''
            }
        </label>
    );
};

export default SigninInput;
