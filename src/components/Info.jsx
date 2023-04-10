import React from 'react'

const Info = () => {
  return (
    <div>
     <div className='flex flex-col -mt-24  justify-start gap-12'>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-4xl'>Personal info</h2>
        <p className='text-gray-500'>Please provide your name, email address, and phone number.</p>
       </div>
        <div className='flex flex-col gap-4'>
        <label className='flex flex-col'>
          Name
          <input className='w-full border rounded-xl px-4 py-2 outline-none' type="text" />
         </label>
         <label className='flex flex-col'>
          Email Address
          <input required className='w-full border rounded-xl px-4 py-2 outline-none' type="email" />
         </label>
         <label className='flex flex-col'>
          Phone Number
          <input className='w-full border rounded-xl px-4 py-2 outline-none' type="text" />
         </label>
        </div>
     </div>

    </div>
  )
}

export default Info