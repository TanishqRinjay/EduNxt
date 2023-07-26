import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const EnrolledCourses = () => {

    const {token} = useSelector((state)=>state.auth)
    const [enrolledCourses, setEnrolledCourses] = useState(null);

    const getEnrolledCourses = async ()=>{
        try{
            const response = await getUse
        }catch(err){
            console.log("Unable to fetch Enrolled Courses");
            console.error(err)
        }
    }

    useEffect(()=>{

    },[])

  return (
    <div>

    </div>
  )
}

export default EnrolledCourses