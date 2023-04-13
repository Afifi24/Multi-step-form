import React, { useState } from 'react'
import imgarc from '../images/icon-arcade.svg'
const Plan = ({chosePlan,setChosePlan}) => {
   const [ismonthly, setIsmonthly] = useState(false)
   const switchButton = ()=>{
      setIsmonthly(!ismonthly)
   }
  return (
    <div>
      <div className='relative bg-white  md:bg-transparent px-5  rounded-md md:rounded-none  md:w-[400px] flex flex-col py-7 -mt-20 md:-mt-0  md:py-10 md:px-0  justify-start gap-6 md:gap-12'>
       <div className='flex flex-col gap-12'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-2xl md:text-4xl'>Select your plan </h2>
       <p className='text-gray-500 text-[14px] md:text-[17px]'>You the option of the of monthly or yearly billing</p>

       </div>
       {
         ismonthly ?
          <div className='flex w-full gap-3 flex-col md:flex-row md:gap-5'>
         <div onClick={()=>setChosePlan('Arcadem')} className={`flex items-center md:items-start flex-row md:flex-col w-full ${chosePlan ==='Arcadem' ? 'Hero': ''} h-fit p-3 gap-4 border hover:border-blue-950 duration-200 cursor-pointer rounded-md `}>
            <img className='md:mb-3' src={imgarc} alt="" />
            <div className='flex flex-col'>
            <h2 className='font-bold '>Arcade</h2>
            <p className='text-[12px] text-gray-500'>$9/mo</p>
            </div>
         </div>
         <div onClick={()=>setChosePlan('Advancedm')} className={`flex items-center md:items-start flex-row md:flex-col w-full ${chosePlan ==='Advancedm' ? 'Hero': ''} cursor-pointer h-fit hover:border-blue-950 duration-200 p-3 gap-4 border rounded-md `}>
            <img className='md:mb-3' src={imgarc} alt="" />
            <div>
            <h2 className='font-bold '>Advanced</h2>
            <p className='text-[12px] text-gray-500'>$12/mo</p>
            </div>
         </div>
         <div onClick={()=>setChosePlan('Prom')} className={`flex items-center md:items-start flex-row md:flex-col w-full ${chosePlan ==='Prom' ? 'Hero': ''} cursor-pointer h-fit p-3 hover:border-blue-950 duration-200 gap-4 border rounded-md`}>
            <img className='md:mb-3' src={imgarc} alt="" />
            <div>
            <h2 className='font-bold '>Pro</h2>
            <p className='text-[12px] text-gray-500'>$15/mo</p>
            </div>
         </div>
       </div>
       :
       <div className='flex w-full gap-3 flex-col md:flex-row md:gap-5'>
       <div onClick={()=>setChosePlan('Arcadey')} className={`flex items-center md:items-start flex-row md:flex-col w-full ${chosePlan ==='Arcadey' ? 'Hero': ''} h-fit p-3 gap-4 border hover:border-blue-950 duration-200 cursor-pointer rounded-md `}>
          <img className='md:mb-3' src={imgarc} alt="" />
          <div className='flex flex-col'>
          <h2 className='font-bold '>Arcade</h2>
          <p className='text-[12px] text-gray-500'>$90/yr</p>
          <p className='text-[12px]'>2 months free</p>
          </div>
       </div>
       <div onClick={()=>setChosePlan('Advancedy')} className={`flex md:items-start items-center flex-row md:flex-col w-full ${chosePlan ==='Advancedy' ? 'Hero': ''} cursor-pointer h-fit hover:border-blue-950 duration-200 p-3 gap-4 border rounded-md `}>
          <img className='md:mb-3' src={imgarc} alt="" />
          <div>
          <h2 className='font-bold '>Advanced</h2>
          <p className='text-[12px] text-gray-500'>$120/yr</p>
          <p className='text-[12px]'>2 months free</p>
          </div>
       </div>
       <div onClick={()=>setChosePlan('Proy')} className={`flex items-center md:items-start flex-row md:flex-col w-full ${chosePlan ==='Proy' ? 'Hero': ''} cursor-pointer h-fit p-3 hover:border-blue-950 duration-200 gap-4 border rounded-md`}>
          <img className='md:mb-3' src={imgarc} alt="" />
          <div>
          <h2 className='font-bold '>Pro</h2>
          <p className='text-[12px] text-gray-500'>$150/yr</p>
          <p className='text-[12px]'>2 months free</p>
          </div>
       </div>
     </div>
      
       }
        <div className='Hero rounded-md flex items-center justify-center gap-2 p-3'>
           <h1 className={`${ismonthly ? 'text-blue-950':'text-gray-300'} font-bold`}>Monthly</h1>
           <div onClick={switchButton} className={`w-[30px]  cursor-pointer h-4 rounded-full flex items-center  px-[1.5px] ${ismonthly ? 'justify-start': 'justify-end'}  bg-blue-950`}>
            <div className='bg-white w-3 h-3 rounded-full'></div>
           </div>
           <h1 className={`${ismonthly ? 'text-gray-300':'text-blue-950'} font-bold`} >Yearly</h1>
        </div>
     </div>
     </div>
      
     
    </div>
  )
}

export default Plan