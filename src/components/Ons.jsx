import React, { useState } from 'react'
import img from '../images/icon-checkmark.svg'
const Ons = () => {
  const [checkonline,setCheckonline] = useState(false)
  const [checkLarge,setCheckLarge] = useState(false)
  const [checkcustom,setCheckcustom] = useState(false)
  return (
    <div>
     <div className='bg-white md:bg-transparent px-5 rounded-md md:rounded-none mx-4 md:mx-0 md:px-0 relative -mt-20 md:-mt-0 flex flex-col pr-2 py-7 md:py-10  justify-start gap-12'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-2xl md:text-4xl'>Pick add-ons</h2>
        <p className='text-gray-500 text-[14px]  md:text-[17px] '>Add-ons help enhance your gaming experience.</p>
       </div>
       <div className='flex flex-col gap-4'>
           <div className={`w-full min-h-[60px] h-[65px] items-center rounded-lg border p-3 flex flex-row justify-between ${checkonline ? 'border-blue-950 Hero':''}`}>
               <div className='flex items-center gap-6 flex-row '>
                <input onClick={()=>setCheckonline(!checkonline)}  className='h-4 w-4' type="checkbox" name="" id="" />
                <div className='flex flex-col '>
                  <h2 className='font-bold text-[12px]'>Online service</h2>
                  <p className='text-[12px] text-gray-500'>Acces to multiplayer games</p>
                </div>
               </div>
               <p className='text-[12px]'>$1/mo</p>
           </div>
           <div className={`w-full min-h-[60px] h-[65px] items-center rounded-lg  border p-3 flex flex-row justify-between ${checkLarge ? 'border-blue-950 Hero':''}`}>
               <div className='flex gap-3 items-center flex-row '>
               <input  onClick={()=>setCheckLarge(!checkLarge)} className='h-4 w-4' type="checkbox" name="" id="" />
                <div className='flex flex-col '>
                  <h2 className='font-bold text-[12px]'>Larger storage</h2>
                  <p className='text-[12px] text-gray-500'>Extra 1 TB of cloud save</p>
                </div>
               </div>
               <p className='text-[12px]'>$2/mo</p>
           </div>
           <div className={`w-full min-h-[60px] h-[65px] items-center rounded-lg  border p-3 flex flex-row justify-between ${checkcustom ? 'border-blue-950 Hero':''} `}>
               <div className='flex items-center gap-3 flex-row '>
               <input  onClick={()=>setCheckcustom(!checkcustom)} className='h-4 w-4' type="checkbox" name="" id="" />
                <div className='flex flex-col '>
                  <h2 className='font-bold text-[12px]'>Customizable profile</h2>
                  <p className='text-[12px] text-gray-500'>Custom theme on your profile</p>
                </div>
               </div>
               <p className='text-[12px]'>$2/mo</p>
           </div>
        </div>
     </div>

     </div>
  )
}

export default Ons