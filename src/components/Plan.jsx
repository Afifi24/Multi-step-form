import React, { useState } from 'react'
import imgarc from '../images/icon-arcade.svg'
const Plan = ({chosePlan,setChosePlan}) => {
   const [ismonthly, setIsmonthly] = useState(false)
   const switchButton = ()=>{
      setIsmonthly(!ismonthly)
   }
  return (
    <div>
      <div className=' hidden w-[400px] md:flex flex-col  md:py-10  justify-start gap-12'>
       <div className='flex flex-col gap-12'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-4xl'>Select your plan </h2>
       <p className='text-gray-500'>You the option of the of monthly or yearly billing</p>

       </div>
       {
         ismonthly ?
          <div className='flex w-full flex-row gap-5'>
         <div onClick={()=>setChosePlan('Arcadem')} className={`w-full ${chosePlan ==='Arcadem' ? 'Hero': ''} h-fit p-3 gap-2 border hover:border-blue-950 duration-200 cursor-pointer rounded-md `}>
            <img className='mb-10' src={imgarc} alt="" />
            <h2 className='font-bold '>Arcade</h2>
            <p className='text-[12px] text-gray-500'>$9/mo</p>
         </div>
         <div onClick={()=>setChosePlan('Advancedm')} className={`w-full ${chosePlan ==='Advancedm' ? 'Hero': ''} cursor-pointer h-fit hover:border-blue-950 duration-200 p-3 gap-2 border rounded-md `}>
            <img className='mb-10' src={imgarc} alt="" />
            <h2 className='font-bold '>Advanced</h2>
            <p className='text-[12px] text-gray-500'>$9/mo</p>
         </div>
         <div onClick={()=>setChosePlan('Prom')} className={`w-full ${chosePlan ==='Prom' ? 'Hero': ''} cursor-pointer h-fit p-3 hover:border-blue-950 duration-200 gap-2 border rounded-md`}>
            <img className='mb-10' src={imgarc} alt="" />
            <h2 className='font-bold '>Pro</h2>
            <p className='text-[12px] text-gray-500'>$9/mo</p>
         </div>
       </div>
       :
       <div className='flex w-full flex-row gap-5'>
         <div onClick={()=>setChosePlan('Arcadey')} className={`w-full ${chosePlan ==='Arcadey' ? 'Hero': ''} h-fit p-3 gap-2 border hover:border-blue-950 duration-200 cursor-pointer rounded-md `}>
            <img className='mb-10' src={imgarc} alt="" />
            <h2 className='font-bold '>Arcade</h2>
            <p className='text-[12px] text-gray-500'>$90/yr</p>
             <p className='text-[12px]'>2 months free</p>
         </div>
         <div onClick={()=>setChosePlan('Advancedy')}  className={`w-full ${chosePlan ==='Advancedy' ? 'Hero': ''} cursor-pointer h-fit hover:border-blue-950 duration-200 p-3 gap-2 border rounded-md `}>
            <img className='mb-10' src={imgarc} alt="" />
            <h2 className='font-bold '>Advanced</h2>
            <p className='text-[12px] text-gray-500'>$120/yr</p>
            <p className='text-[12px]'>2 months free</p>

         </div>
         <div onClick={()=>setChosePlan('Proy')} className={`w-full ${chosePlan ==='Proy' ? 'Hero': ''} cursor-pointer h-fit p-3 hover:border-blue-950 duration-200 gap-2 border rounded-md `}>
            <img className='mb-10' src={imgarc} alt="" />
            <h2 className='font-bold '>Pro</h2>
            <p className='text-[12px] text-gray-500'>$150/yr</p>
            <p className='text-[12px]'>2 months free</p>

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
      {/* mobile */}
     <div className=' md:hidden relative  bg-white px-5 rounded-md mx-4 flex flex-col -mt-20  justify-start gap-6 py-7'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-2xl'>Select your plan</h2>
        <p className='text-gray-500 text-[14px] '>You the option of the of monthly or yearly billing</p>
       </div>
       <div className='flex flex-col gap-3'>
          <div className='min-w-[130px] flex items-center  h-fit p-3 gap-2 border hover:border-blue-950 duration-200 cursor-pointer rounded-md '>
             <img className='' src={imgarc} alt="" />
             <h2 className='font-bold '>Arcade</h2>
             <p className='text-[12px] text-gray-500'>$9/mo</p>
          </div>
          <div className='min-w-[130px] flex items-center cursor-pointer h-fit hover:border-blue-950 duration-200 p-3 gap-2 border rounded-md '>
             <img className='' src={imgarc} alt="" />
             <h2 className='font-bold '>Arcade</h2>
             <p className='text-[12px] text-gray-500'>$9/mo</p>
          </div>
          <div className='min-w-[130px] flex items-center cursor-pointer h-fit p-3 hover:border-blue-950 duration-200 gap-2 border rounded-md '>
             <img className='' src={imgarc} alt="" />
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