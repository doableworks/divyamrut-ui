import MainBanner from '@/components/common/MainBanner'
import HolisticHealth from '@/components/home1/HolisticHealth'
import WhoWeAre from '@/components/home1/WhoWeAre'
import OurValues from '@/components/about/OurValues'
import React from 'react'

const page = () => {
  return (
    <>
    <MainBanner />
     <WhoWeAre />
     <HolisticHealth />
     <OurValues />
    </>
  )
}

export default page