import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { categories } from "../services/apis";
import { getCatalogPageData } from "../services/operations/pageAndComponentData";
import { apiConnector } from "../services/apiconnector"
import CourseSlider from "../components/core/CatalogPage/CourseSlider";
import FooterSection from "../components/common/FooterSection";

const Catalog = () => {
    const {catalogName} = useParams();
    const [catalogPageData, setCatalogPageData] = useState(null)
    const [categoryId, setCategoryId] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const getCategory = async()=>{
            const res = await apiConnector("GET", categories.CATEGORIES_API)
            console.log("Printing res: ", res)
            const category_id = res?.data?.data?.filter((ct)=>ct.name.replace(" ","-").toLowerCase()===catalogName)[0]._id
            setCategoryId(category_id)
        }
        getCategory()
    },[catalogName])
    
    useEffect(()=>{
        setLoading(true)
        const getCategoryDetails = async()=>{
            try{
                const res = await getCatalogPageData(categoryId)
                console.log("Printing res 2222: ", res)
                setCatalogPageData(res)
            }catch(err){
                console.log("Error in fetching category details", err)
            }
        }
        getCategoryDetails()
        console.log("Catalog details: ", catalogPageData)
        setLoading(false)
    }, [categoryId])

    return (
        <div className=" text-richblack-5 w-[70%] mx-auto">
            <div>
                <p>{`Home / Catalog / ${catalogName.replace("-","")}`}</p>
                <h2></h2>
                <p></p>
            </div>
            <div>

                {/* Section 1 */}
                <div>
                    <div className="flex gap-x-3">
                        <p>Most Popular</p>
                        <p>New</p>
                    </div>
                    <CourseSlider />
                </div>

                {/* Section 2 */}
                <div>
                    <p>Top Courses</p>
                    <div>
                        <CourseSlider/>
                    </div>
                </div>

                {/* Section 3 */}
                <div>
                    <p>Frequently Bought Together</p>
                    
                </div>
            </div>
            <FooterSection/>
        </div>
    );
};

export default Catalog;
