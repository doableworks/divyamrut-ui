import MainBanner from '@/components/common/MainBanner'
import React from 'react'
import Product from "@/components/proudect/Product"

const products = [
    {
      "title": "Balancing Your Life: Ayurveda Tips from PranaVeda Experts",
      "category": "Life Balance",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "Top Ayurvedic Herbs for Enhanced Immunity and Well-being",
      "category": "Ayurvedic Herbs",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "The Power of Ayurveda: Transforming Your Health Naturally with PranaVeda",
      "category": "Natural Health",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "How PranaVeda Helps You Achieve Holistic Health and Vitality",
      "category": "Holistic Health",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "10 Ayurvedic Practices to Boost Your Daily Wellness Routine",
      "category": "Daily Wellness",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    },
    {
      "title": "Unlocking the Secrets of Ayurveda: A Beginner's Guide to PranaVeda",
      "category": "Ayurveda Basics",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
      "date": "August 6, 2024",
      "comments": "No Comments",
      "image": "/asset/home/remotely-work-freelancer-works-remotely-home-cozy-workation-remote-work-leisure-work-life-balance-.jpg"
    }
  ]
  

const page = () => {
  const heading = "Chandan-Kumkum Bindi Kit"
  const subHeading = "Trusted by millions, validated by you."

  return (
    <>
      <MainBanner heading={heading} subHeading={subHeading} />
      <div>
      <div className="my-20 flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
          <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default page