import MainBanner from '@/components/common/MainBanner'
import OurValues from '@/components/about/OurValues'
import React from 'react'

const page = () => {
  const heading = "About us"
  const subHeading = "Trusted by millions, validated by you."

  return (
    <>
    <MainBanner heading={heading} subHeading={subHeading} />
     <OurValues />
    </>
  )
}

export default page