import React from "react";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

const Cart = () => {
    const { total, totalItems } = useSelector((state) => state.cart);

    return (
        <div className="text-richblack-5">
            <h1>Courses</h1>
            <p>{totalItems} Courses are in your Cart</p>
            {
                total > 0 ?
                (<div>
                    <RenderCartCourses/>
                    <RenderTotalAmount/>
                </div>)
                :
                (<p>Your Cart is empty.</p>)
            }
        </div>
    );
};

export default Cart;
