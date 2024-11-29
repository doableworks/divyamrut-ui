import MainBanner from '@/components/common/MainBanner'
import React from 'react'

const page = () => {
  const heading = "Purpose"
  const subHeading = "Trusted by millions, validated by you."

  return (
    <>
      <MainBanner heading={heading} subHeading={subHeading} />
    </>
  )
}

export default page