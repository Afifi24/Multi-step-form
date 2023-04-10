import React from 'react'
import imgarc from '../images/icon-arcade.svg'
const Plan = () => {
  return (
    <div>
       <div className='flex flex-col -mt-24  justify-start gap-12'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-4xl'>Select your plan </h2>
        <p className='text-gray-500'>You the option of the of monthly or yearly billing</p>
       </div>
        <div className='flex flex-row gap-5'>
          <div className='min-w-[130px] h-fit p-3 gap-2 border hover:border-blue-950 duration-200 cursor-pointer rounded-md '>
             <img className='mb-10' src={imgarc} alt="" />
             <h2 className='font-bold '>Arcade</h2>
             <p className='text-[12px] text-gray-500'>$9/mo</p>
          </div>
          <div className='min-w-[130px] cursor-pointer h-fit hover:border-blue-950 duration-200 p-3 gap-2 border rounded-md '>
             <img className='mb-10' src={imgarc} alt="" />
             <h2 className='font-bold '>Arcade</h2>
             <p className='text-[12px] text-gray-500'>$9/mo</p>
          </div>
          <div className='min-w-[130px] cursor-pointer h-fit p-3 hover:border-blue-950 duration-200 gap-2 border rounded-md '>
             <img className='mb-10' src={imgarc} alt="" />
             <h2 className='font-bold '>Arcade</h2>
             <p className='text-[12px] text-gray-500'>$9/mo</p>
          </div>
        </div>
        <div className='bg-gray-300 rounded-md flex items-center justify-center gap-2 p-3'>
           <h1>Monthly</h1>
           <div className='w-[30px] cursor-pointer h-4 rounded-full flex items-center justify-start px-[1.5px]  bg-blue-950'>
            <div className='bg-white w-3 h-3 rounded-full'></div>
           </div>
           <h1>Yearly</h1>
        </div>
     </div>
    </div>
  )
}

export default Plan