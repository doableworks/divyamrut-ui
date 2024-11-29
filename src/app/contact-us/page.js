import MainBanner from '@/components/common/MainBanner'
import React from 'react'
import GoogleMapCom from '../../components/common/GoogleMapCom'
import GetInTouch from '../../components/about/GetInTouch'

const page = () => {
  const heading = "Contact us"
  const subHeading = "Trusted by millions, validated by you."

  return (
    <>
    <MainBanner heading={heading} subHeading={subHeading} />
    {/* <GetInTouch /> */}
    <GoogleMapCom />
    </>
  )
}

export default page