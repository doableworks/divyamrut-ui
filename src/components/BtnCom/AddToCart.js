import React from "react";

const AddToCartBtn = ({cartFun}) => {
  return (
    <button
      type="submit"
      className="site-button-secondary rounded w-full max-w-[350px] h-[58px] !m-0"
      onClick={()=>cartFun()}
    >
       Add To Cart
    </button>
  );
};

export default AddToCartBtn;
