import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"

const tabsName = [
    "Free", "New to Coding", "Most popular", "Skills paths", "Career paths"
]

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses)
    const [currentCard, setCard] = useState(HomePageExplore[0].courses.heading)

    const setMyCards = (value)=>{
        setCurrentTab(value)
        const result = HomePageExplore.filter((course)=> course.tag===value)
        setCourses(result.courses)
        setCard()
    }

  return (
    <div>
        
    </div>
  )
}

export default ExploreMore