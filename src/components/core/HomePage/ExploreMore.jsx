import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "../../core/HomePage/CourseCard";

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(
        HomePageExplore[0].courses[0].heading
    );

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    };

    return (
        <div className=" flex flex-col items-center">
            <div className=" text-richblack-5 text-4xl font-semibold text-center">
                Unlock the
                <HighlightText text={"Power of code"} />
            </div>
            <p className="text-center mt-1 font-medium text-richblack-300">
                Learn to build anything that you can imagine
            </p>
            <div className="w-fit flex flex-row gap-2 bg-richblack-800 rounded-full p-1 shadow-[0px_1px_1px_0px_rgba(255,255,255,0.25)] mt-5">
                {tabsName.map((tab, i) => {
                    return (
                        <div
                            className={`text-[16px] flex items-center ${
                                currentTab === tab
                                    ? "bg-richblack-900 text-richblack-5"
                                    : "text-richblack-200 transition-all duration-200 hover:bg-richblack-900 hover:ring-richblack-25"
                            } cursor-pointer px-4 py-[6px] rounded-full`}
                            key={i}
                            onClick={() => {
                                setMyCards(tab);
                            }}
                        >
                            {tab}
                        </div>
                    );
                })}
            </div>
            {/* Card group */}
            <div className="h-[200px]"></div>
            <div className="absolute gap-10 flex flex-row justify-between items-start bottom-0 translate-y-[50%] mb-0">
                {courses.map((course, i) => {
                    return (
                        <CourseCard
                            key={i}
                            index={i}
                            cardData={course}
                            currentCard={currentCard}
                            setCurrentCard={setCurrentCard}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ExploreMore;
