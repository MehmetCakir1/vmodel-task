import React from 'react'

const MainPhotos = () => {
  return (
    <div className='grid md:grid-cols-2 gap-8 px-5 pb-[100px]'>
      <div className='relative'>
        <img src="images\Rectangle 45.jpg" alt="p-45" className='w-full h-[372px]' />
        <p className='text-[#423130] bg-white w-[245px] h-[70px] absolute bottom-2 right-0 flex justify-center items-center text-2xl drop-shadow-sm'>12,653+ Models</p>
      </div>
      <div className='relative'>
        <img src="images\influencer.jpg" alt="influencer" className='w-full h-[372px]'/>
        <p className='text-[#423130] bg-white w-[245px] h-[70px] absolute bottom-2 right-0 flex justify-center items-center text-2xl drop-shadow-sm' >12,653+ Models</p>
      </div>
      <div className='relative'>
        <img src="images\photographer.jpg" alt="photographer" className='w-full h-[372px]'/>
        <p className='text-[#423130] bg-white w-[245px] h-[70px] absolute bottom-2 right-0 flex justify-center items-center text-2xl drop-shadow-sm' >12,653+ Models</p>
      </div>
      <div className='relative'>
        <img src="images\dog.jpg" alt="dog" className='w-full h-[372px]'/>
        <p className='text-[#423130] bg-white w-[245px] h-[70px] absolute bottom-2 right-0 flex justify-center items-center text-2xl drop-shadow-sm' >12,653+ Models</p>
      </div>
    </div>
  )
}

export default MainPhotos