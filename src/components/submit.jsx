import React from 'react'
import img from '../images/icon-advanced.svg'
const submit = () => {
  return (
   <div className=' relative  flex w-full h-full flex-col items-center justify-center '>
     <div className='mx-3 h-96 px-4 md:px-0 -mt-20 md:-mt-0 bg-white rounded-md md:rounded-none  md:bg-transparent md:mx-0 flex gap-3 flex-col items-center justify-center'>
        <img src={img} alt="" />
        <h1 className='font-bold'>Thank you!</h1>
        <p className='text-gray-500 max-w-[400px] text-center'>Thanks for confirming your subsription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com. </p>
    </div>
   </div>
  )
}

export default submit