import React, { useState, useEffect } from 'react'
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI'
import {getInstructorData} from "../../../../services/operations/profileAPI"
import { useSelector } from 'react-redux'

const Instructor = () => {
    const {token} = useSelector((state)=>state.auth)
    const [loading, setLoading] = useState(false)
    const [instructorData, setInstructorData] = useState(null)
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        const getCourseDataWithStats = async()=>{
            setLoading(true)
            const instructorApiData = await getInstructorData(token);
            const result = await fetchInstructorCourses(token)
            if(instructorApiData.length){
                setInstructorData(instructorApiData)
            }
            if(result){
                setCourses(result)
            }
            setLoading(false)
        }
        getCourseDataWithStats()
    },[])

  return (
    <div>
        Hello
    </div>
  )
}

export default Instructor