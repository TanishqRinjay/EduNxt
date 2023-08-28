import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const VideoDetails = () => {
    const {courseId, sectionId, subSectionId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const playerRef = useRef()
    const token = useSelector((state)=>state.auth)
    const {courseSectionData, courseEntireData, completedLectures } = useSelector((state)=>state.viewCourse)

    const [videoData, setVideoData] = useState([])
    const [videoEnded, setVideoEnded] = useState(false)
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        const setVideoSpecificDetails = async()=>{
            if(!courseSectionData.length){
                return 
            }
            if(!courseId && !sectionId && !subSectionId){
                navigate("/dashboard/enrolled-courses")
            }
        }
        setVideoSpecificDetails()
    },[])


    const isFirstVideo=()=>{
        
    }
    const isLastVideo=()=>{
        
    }
    const goToNextVideo=()=>{
        
    }
    const goToPrevVideo=()=>{
        
    }
    const handleLectureCompletion= ()=>{

    }

  return (
    <div>

    </div>
  )
}

export default VideoDetails