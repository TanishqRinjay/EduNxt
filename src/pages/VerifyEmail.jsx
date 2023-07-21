import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { AiOutlineArrowLeft } from "react-icons/ai";

const VerifyEmail = () => {
    const { signupData, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData;
        dispatch(
            signUp(
                accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
                navigate
            )
        );
    };

    return (
        <div className="text-richblack-5 flex items-center justify-center w-full h-[80vh]">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="w-[23%] flex flex-col gap-2 justify-center items-start">
                    <h1 className=" text-3xl">Verify Email</h1>
                    <p className=" my-2 text-richblack-100">
                        A verification code has been sent to your email. Enter
                        that code below:
                    </p>
                    <form onSubmit={submitHandler} className="w-full flex flex-col justify-center items-center mt-5 text-richblack-5">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={'-'}
                            inputStyle={"bg-richblack-800 text-richblack-5 h-[4rem] w-[48px] focus:outline-yellow-5"}
                            renderInput={(props) => (
                                <input
                                    placeholder="-"
                                    {...props}
                                />
                            )}
                        />

                        <button
                            type="submit"
                            className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 w-full"
                        >
                            Create Account
                        </button>
                    </form>
                    <div className="flex flex-row justify-between w-full mt-5">
                        <div className="flex flex-row justify-center items-center gap-2">
                            <AiOutlineArrowLeft />
                            <Link to="/login">Back to Login</Link>
                        </div>
                        <div
                            className=" text-blue-100"
                            onClick={() =>
                                dispatch(sendOtp(signupData.email, navigate))
                            }
                        >
                            Resend it
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VerifyEmail;
