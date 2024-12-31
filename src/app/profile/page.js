import MainBanner from '@/components/common/MainBanner'
import React from 'react'
import GoogleMapCom from '../../components/common/GoogleMapCom'
import AboutForm from '../../components/about/AboutForm'
import ProfilePage from "@/components/profile/profilePage"

const page = () => {
  const heading = "Profile"
  const subHeading = "Trusted by millions, validated by you."

  return (
    <>
    <MainBanner heading={heading} subHeading={subHeading} />
    <ProfilePage />
    </>
  )
}

export default page