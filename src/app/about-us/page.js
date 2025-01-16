import MainBanner from '@/components/common/MainBanner'
import OurValues from '@/components/about/OurValues'
import React from 'react'
import WhyUsSection from '@/components/about/WhyUsSection'
import TestimonialSlider from '@/components/home1/Testimonial'

const page = () => {
  const heading = "About us"

  return (
    <div>
    {/* <MainBanner heading={heading}  /> */}
     <OurValues />
     <WhyUsSection />
     <TestimonialSlider />
    </div>
  )
}

export default page