import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const EditCourse = () => {

    const {courseId} = useParams()
    const {token} = useSelector((state)=>state.auth)
    const {course} = useSelector((state)=>state.course)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);

  return (
    <div>

    </div>
  )
}

export default EditCourse