import React from 'react'
import { useCountUp } from "react-countup";


const CountUpCom = ({id, end, suffix,decimals=0 }) => {

    useCountUp({
        ref: id,
        end: end,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        suffix:suffix,
        decimals:decimals
      }
    );

  return (
    <h5 className='font-jost text-[13px] md:text-[39px] font-[600] text-text' id={id}/>
  )
}

export default CountUpCom