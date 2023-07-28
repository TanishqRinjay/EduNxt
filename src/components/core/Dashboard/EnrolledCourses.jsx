import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import ProgressBar from "@ramonak/react-progress-bar";

const EnrolledCourses = () => {

    const [enrolledCourses, setEnrolledCourses] = useState(null);
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    
    const getEnrolledCourses = async()=>{
        try{
            const response = getUserEnrolledCourses(token)
            setEnrolledCourses(response)
        }catch(e){
            console.log("Error: ", e)
        }
    }


    useEffect(()=>{
        getEnrolledCourses()
    }, [])

    return (
        <div className="text-richblack-5 w-full h-full flex items-center justify-center flex-col gap-5">
            <h2 className="w-[80%] text-3xl text-richblack-5 flex justify-start mb-5 font-medium">
                Enrolled Courses
            </h2>
            {!enrolledCourses? (<div>Loading...</div>):(
                !enrolledCourses.length? (<div>You haven't enrolled in any course</div>):(
                    <div>
                        <div>
                            <p>Course Name</p>
                            <p>Duration</p>
                            <p>Progress</p>
                        </div>
                        <div>
                        {enrolledCourses.map((course, i)=>(
                            <div>
                                <div>
                                    <img src={course?.thumbnail} />
                                    <div>
                                        <p>{course?.courseName}</p>
                                        <p>{(course?.courseDescription).subStr(0, 10)}</p>
                                    </div>
                                </div>
                                <div>
                                    {course?.totalDuration}
                                </div>
                                <div>
                                    <p>Progress: {course.progressPercentage || 0}%</p>
                                    <ProgressBar
                                        completed={course.progressPercentage || 0}
                                        height="8px"
                                        isLabelVisible={false}
                                    />
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default EnrolledCourses;
