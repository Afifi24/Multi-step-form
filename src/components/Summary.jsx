import React from 'react'

const Summary = () => {
  return (
    <div>
       {/* desktop */}
     <div className=' hidden md:flex flex-col pr-2 md:py-10  justify-start gap-20'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-4xl'>Finishing up</h2>
        <p className='text-gray-500'>Double check everthing looks OK before confirming.</p>
       </div>
       <div className='flex flex-col gap-4'>
           <div className='w-full flex flex-col gap-3 bg-gray-200 rounded-md p-3 '>
             <div className='border-b flex items-center justify-between border-black pb-3'>
             <div className='flex flex-col'> 
              <h2 className='font-bold'>Arcade( Monthly)</h2>
              <p className='text-[14px] text-gray-500 underline'>change</p>
              </div>
              <p className='text-[14px] font-bold'>$9/mo</p>
             </div>
            <div className='flex flex-row justify-between'>
            <p className='text-[14px] text-gray-500'>Online service</p>
            <p className='text-[14px] text-gray-500'>$1/mo</p>
            </div>
            <div className='flex flex-row justify-between'>
            <p className='text-[14px] text-gray-500'>Large storage</p>

            <p className='text-[14px] text-gray-500'>$2/mo</p>
            </div>
           </div>
           <div className='flex items-center justify-between '>
           <p className='text-[14px] text-gray-500'>Total</p>

            <p className='text-[14px] text-gray-500'>$3/mo</p>
             
           </div>
        </div>
     </div>
      {/* mobile */}
     <div className=' md:hidden relative  bg-white px-5 rounded-md mx-4 flex flex-col -mt-20  justify-start gap-12 py-7'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-2xl'>Personal info</h2>
        <p className='text-gray-500 text-[14px] '>Please provide your name, email address, and phone number.</p>
       </div>
       <div className='flex flex-col gap-4'>
           <div className='w-full flex flex-col gap-3 bg-gray-200 rounded-md p-3 '>
             <div className='border-b flex items-center justify-between border-black pb-3'>
             <div className='flex flex-col'> 
              <h2 className='font-bold'>Arcade( Monthly)</h2>
              <p className='text-[14px] text-gray-500 underline'>change</p>
              </div>
              <p className='text-[14px] font-bold'>$9/mo</p>
             </div>
            <div className='flex flex-row justify-between'>
            <p className='text-[14px] text-gray-500'>Online service</p>
            <p className='text-[14px] text-gray-500'>$1/mo</p>
            </div>
            <div className='flex flex-row justify-between'>
            <p className='text-[14px] text-gray-500'>Large storage</p>

            <p className='text-[14px] text-gray-500'>$2/mo</p>
            </div>
           </div>
           <div className='flex items-center justify-between '>
           <p className='text-[14px] text-gray-500'>Total</p>

            <p className='text-[14px] text-gray-500'>$3/mo</p>
             
           </div>
        </div>
     </div>
    </div>
  )
}

export default Summary