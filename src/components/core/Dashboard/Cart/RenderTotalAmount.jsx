import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn'

const RenderTotalAmount = () => {

    const {total, cart} = useSelector((state)=>state.cart)

    const handleBuyCourse = ()=>{
        const courses = cart.map((course)=>course._id)
        console.log("Bought these courses: ",courses)
        //TODO Integrate payment API
    }

  return (
    <div>
        <p>Total:</p>
        <p>Rs {total}</p>
        <IconBtn text="Buy Now" onclick={handleBuyCourse} customClasses={"bg-yellow-50 text-richblack-900 font-medium flex items-center justify-center gap-2 rounded-lg px-5 py-2 w-[90%]"}/>
    </div>
  )
}

export default RenderTotalAmount