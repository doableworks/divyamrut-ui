import MainBanner from '@/components/common/MainBanner'
import React from 'react'
import GoogleMapCom from '../../components/common/GoogleMapCom'
import AboutForm from '../../components/about/AboutForm'
import OrderList from "@/components/OrderList"

const page = () => {
  const heading = "Oder list"
  const subHeading = "Trusted by millions, validated by you."

  return (
    <>
    <MainBanner heading={heading} subHeading={subHeading} />
     <OrderList />
    </>
  )
}

export default page