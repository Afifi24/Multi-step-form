import React, { useState } from 'react'

const Summary = () => {
  const [chosen,setChosen] = useState(0)
  return (
    <div>
       {/* desktop */}
     <div className='bg-white md:bg-transparent py-7 mx-4 md:mx-0  relative flex flex-col px-5 md:px-0 rounded-md md:rounded-none pr-2 md:py-10  justify-start -mt-20 md:-mt-0  gap-12 md:gap-20'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-2xl md:text-4xl'>Finishing up</h2>
        <p className='text-gray-500 text-[14px] md:text-[17px] '>Double check everthing looks OK before confirming.</p>
       </div>
       <div className='flex flex-col gap-4'>
           <div className='w-full flex flex-col gap-3 bg-gray-200 rounded-md p-3 '>
             <div onClick={()=>setChosen(0)} className={`${chosen===0? 'border-b border-black pb-3' :''} cursor-pointer flex items-center justify-between `}>
             <div className='flex flex-col'> 
              <p className={` ${chosen===0 ? 'font-bold':''}`}>Arcade( Monthly)</p>
              {chosen===0 && <p className='text-[14px] text-gray-500 underline'>change</p>}
              </div>
              <p className={` ${ chosen===0 ?'font-bold':''} text-[14px] text-gray-500`} >$9/mo</p>
             </div>
            <div onClick={()=>setChosen(1)} className={`${chosen===1? 'border-b border-black pb-3' :''} cursor-pointer flex items-center justify-between `}>
            <div className='flex flex-col'> 
              <p className={` ${chosen===1 ? 'font-bold':''}`}>Online service</p>
              {chosen===1 && <p className='text-[14px] text-gray-500 underline'>change</p>}
              </div>
            <p className={` ${ chosen===1 ?'font-bold':''} text-[14px] text-gray-500`}>$1/mo</p>
            </div>
            <div onClick={()=>setChosen(2)} className={`${chosen===2? 'border-b border-black pb-3' :''}  flex items-center cursor-pointer justify-between `}>
            <div className='flex flex-col'> 
              <p className={` ${chosen===2 ? 'font-bold':''}`}>Large storage</p>
              {chosen===2 && <p className='text-[14px] text-gray-500 underline'>change</p>}
              </div>
            <p className={` ${ chosen===2 ?'font-bold':''} text-[14px] text-gray-500`}>$2/mo</p>
            </div>
           </div>
           <div className='flex items-center justify-between '>
           <p className='text-[14px] text-gray-500'>Total (per month)</p>
               
            <p className='text-blue-400 font-bold'>$12/mo</p>
             
           </div>
        </div>
     </div>
      
    </div>
  )
}

export default Summary