import React from "react";

const AddToCartBtn = ({cartFun}) => {
  return (
    <button
      type="submit"
      className="w-full bg-q4ca25af text-white p-4 rounded min-w-[250px] max-w-[350px]"
      onClick={()=>cartFun()}
    >
       Add To Cart
    </button>
  );
};

export default AddToCartBtn;
