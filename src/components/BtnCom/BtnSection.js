import React from 'react'
import BookNowBtn from './BookNow'
import BuyNowBtn from './BuyNow'
import AddToCartBtn from './AddToCart'

const BtnSection = ({showBookBtn=false, showBuyBtn=false, showAddToCartBtn=false, buyFun=()=>{}, bookFun=()=>{}, cartFun=()=>{}}) => {
  return (
    <div className='flex flex-col items-center gap-5 py-4'>
        {showBookBtn && <BookNowBtn bookFun={bookFun} />}
        {showBuyBtn && <BuyNowBtn buyFun={buyFun} />}
       {showAddToCartBtn && <AddToCartBtn cartFun={cartFun} />}
    </div>
  )
}

export default BtnSection