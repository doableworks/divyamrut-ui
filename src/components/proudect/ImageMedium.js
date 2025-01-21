"use client"
import React,{useCallback, useState} from 'react'
import {Controlled as ControlledZoom} from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const ImageMedium = ({imgSrc}) => {
    const [isZoomed, setIsZoomed] = useState(false)

    const handleZoom = useCallback(shouldZoom=>{
        setIsZoomed(shouldZoom)
    },[])


  return (
    <ControlledZoom
    isZoomed ={isZoomed}
    onZoomChange={handleZoom}
    >
    <img
      alt="img"
      src={imgSrc}
      width="500"
    />
  </ControlledZoom>
  )
}

export default ImageMedium