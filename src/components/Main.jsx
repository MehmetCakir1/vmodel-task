import React from 'react'
import Brands from './Main/Brands'
import Description from './Main/Description'
import MainPhotos from './Main/MainPhotos'
import MiddlePhotos from './Main/MiddlePhotos'

const Main = () => {
  return (
    <div>
      <Brands/>
      <MiddlePhotos/>
      <Description/>
      <MainPhotos/>
    </div>
  )
}

export default Main