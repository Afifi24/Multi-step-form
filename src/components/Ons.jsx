import React, { useState } from 'react'
import checked from '../images/icon-checkmark.svg'
import img from '../images/icon-pro.svg'
const Ons = () => {
  const [check,setCheck] = useState(false)
  return (
    <div>
     <div className=' hidden md:flex flex-col pr-2 md:py-10  justify-start gap-12'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-4xl'>Pick add-ons</h2>
        <p className='text-gray-500'>Add-ons help enhance your gaming experience.</p>
       </div>
       <div className='flex flex-col gap-4'>
           <div className={`w-full min-h-[60px] h-[65px] items-center rounded-lg border p-3 flex flex-row justify-between ${check ? 'border-blue-950':''}`}>
               <div className='flex items-center gap-6 flex-row '>
                <input onClick={()=>setCheck(!check)}  className='h-4 w-4' type="checkbox" name="" id="" />
                <div className='flex flex-col '>
                  <h2 className='font-bold text-[12px]'>Online service</h2>
                  <p className='text-[12px] text-gray-500'>Acces to multiplayer games</p>
                </div>
               </div>
               <p className='text-[12px]'>$+1/mo</p>
           </div>
           <div className='w-full min-h-[60px] h-[65px] items-center rounded-lg  border p-3 flex flex-row justify-between'>
               <div className='flex gap-3 items-center flex-row '>
               <input  onClick={()=>setCheck(!check)} className='h-4 w-4' type="checkbox" name="" id="" />
                <div className='flex flex-col '>
                  <h2 className='font-bold text-[12px]'>Online service</h2>
                  <p className='text-[12px] text-gray-500'>Acces to multiplayer games</p>
                </div>
               </div>
               <p className='text-[12px]'>$+1/mo</p>
           </div>
           <div className='w-full min-h-[60px] h-[65px] items-center rounded-lg  border p-3 flex flex-row justify-between'>
               <div className='flex items-center gap-3 flex-row '>
               <input  onClick={()=>setCheck(!check)} className='h-4 w-4' type="checkbox" name="" id="" />
                <div className='flex flex-col '>
                  <h2 className='font-bold text-[12px]'>Online service</h2>
                  <p className='text-[12px] text-gray-500'>Acces to multiplayer games</p>
                </div>
               </div>
               <p className='text-[12px]'>$+1/mo</p>
           </div>
        </div>
     </div>



     {/* mobile */}
     <div className=' md:hidden relative  bg-white px-5 rounded-md mx-4 flex flex-col -mt-20  justify-start gap-12 py-7'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-2xl'>Pick add-ons</h2>
        <p className='text-gray-500 text-[14px] '>Add-ons help enhance your gaming experience.</p>
       </div>
       <div className='flex flex-col gap-4'>
           <div className={`w-full min-h-[60px] h-[65px] items-center rounded-lg border p-3 flex flex-row justify-between ${check ? 'border-blue-950':''}`}>
               <div className='flex items-center gap-6 flex-row '>
                <input onClick={()=>setCheck(!check)}  className='h-4 w-4' type="checkbox" name="" id="" />
                <div className='flex flex-col '>
                  <h2 className='font-bold text-[12px]'>Online service</h2>
                  <p className='text-[12px] text-gray-500'>Acces to multiplayer games</p>
                </div>
               </div>
               <p className='text-[12px]'>$+1/mo</p>
           </div>
           <div className='w-full min-h-[60px] h-[65px] items-center rounded-lg  border p-3 flex flex-row justify-between'>
               <div className='flex gap-3 items-center flex-row '>
               <input  onClick={()=>setCheck(!check)} className='h-4 w-4' type="checkbox" name="" id="" />
                <div className='flex flex-col '>
                  <h2 className='font-bold text-[12px]'>Online service</h2>
                  <p className='text-[12px] text-gray-500'>Acces to multiplayer games</p>
                </div>
               </div>
               <p className='text-[12px]'>$+1/mo</p>
           </div>
           <div className='w-full min-h-[60px] h-[65px] items-center rounded-lg  border p-3 flex flex-row justify-between'>
               <div className='flex items-center gap-3 flex-row '>
               <input  onClick={()=>setCheck(!check)} className='h-4 w-4' type="checkbox" name="" id="" />
                <div className='flex flex-col '>
                  <h2 className='font-bold text-[12px]'>Online service</h2>
                  <p className='text-[12px] text-gray-500'>Acces to multiplayer games</p>
                </div>
               </div>
               <p className='text-[12px]'>$+1/mo</p>
           </div>
        </div>
     </div>
     </div>
  )
}

export default Ons