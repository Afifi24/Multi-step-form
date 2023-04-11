import React from 'react'

const Info = () => {
  return (
    <div>
      {/* desktop */}
     <div className=' hidden md:flex flex-col pr-2 md:py-10  justify-start gap-12'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-4xl'>Personal info</h2>
        <p className='text-gray-500'>Please provide your name, email address, and phone number.</p>
       </div>
        <div className='flex flex-col w-full gap-4'>
        <label className='flex flex-col'>
          Name
          <input  placeholder='e.g.stephen king' className='w-full border rounded-xl px-4 py-2 outline-none' type="text" />
         </label>
         <label className='flex flex-col'>
          Email Address
          <input placeholder='e.g.stephanking@gmail.com' required className='w-full border rounded-xl px-4 py-2 outline-none' type="email" />
         </label>
         <label className='flex flex-col'>
          Phone Number
          <input placeholder='e.g +1 234 567 890' className='w-full border rounded-xl px-4 py-2 outline-none' type="text" />
         </label>
        </div>
     </div>
      {/* mobile */}
     <div className=' md:hidden relative  bg-white px-5 rounded-md mx-4 flex flex-col -mt-20  justify-start gap-12 py-7'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-2xl'>Personal info</h2>
        <p className='text-gray-500 text-[14px] '>Please provide your name, email address, and phone number.</p>
       </div>
        <div className='flex flex-col gap-4'>
        <label className='flex text-[14px] flex-col'>
          Name
          <input placeholder='e.g.stephen king' className='w-full border rounded-md px-4 py-2 outline-none' type="text" />
         </label>
         <label className='flex text-[14px] flex-col'>
          Email Address
          <input placeholder='e.g.stephanking@gmail.com' required className='w-full border rounded-md px-4 py-2 outline-none' type="email" />
         </label>
         <label className='flex text-[14px] flex-col'>
          Phone Number
          <input placeholder='e.g +1 234 567 890' className='w-full border rounded-md px-4 py-2 outline-none' type="text" />
         </label>
        </div>
     </div>

    </div>
  )
}

export default Info