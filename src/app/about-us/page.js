import MainBanner from '@/components/common/MainBanner'
import HolisticHealth from '@/components/home1/HolisticHealth'
import WhoWeAre from '@/components/home1/WhoWeAre'
import OurValues from '@/components/about/OurValues'
import React from 'react'

const page = () => {
  const heading = "About us"
  const subHeading = "Trusted by millions, validated by you."

  return (
    <>
    <MainBanner heading={heading} subHeading={subHeading} />
     <WhoWeAre />
     <HolisticHealth />
     <OurValues />
    </>
  )
}

export default page