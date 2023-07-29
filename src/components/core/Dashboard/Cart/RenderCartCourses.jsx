import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from 'react-stars'
import {AiFillStar} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import { removeFromCart } from '../../../../slices/cartSlice'

const RenderCartCourses = () => {

    const {cart, } = useSelector((state)=>state.cart)
    const dispatch = useDispatch()

  return (
    <div>
        {
            cart.map((item, i)=>{
                <div>
                    <div>
                        <img src={item?.thumbnail} alt={`Item ${i+1}`} />
                        <div>
                            <p>{item?.courseName}</p>
                            <p>{item?.category?.name}</p>
                            <div>
                                <span>4.8</span>
                                <ReactStars
                                    count={5}
                                    size={5}
                                    edit={false}
                                    activeColor={"#E7C009"}
                                    // half={"true"}
                                    emptyIcon={<AiFillStar/>}
                                    fullIcon={<AiFillStar/>}
                                />
                                <span>{item?.ratingAndReviews?.length} Ratings</span>
                            </div>
                        </div>
                        <div>
                            <button
                            onClick={()=>dispatch(removeFromCart(item._id))}
                            >
                                <RiDeleteBin6Line/>
                                <span>Remove</span>
                            </button>
                            <p>Rs. {item?.price}</p>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default RenderCartCourses