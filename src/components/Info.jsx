import React from 'react'

const Info = ({name,setName,setEmail,email,setPhone,phone,nameerr,emailerr,phoneerr}) => {
  return (
    <div>
      {/* desktop */}
     <div className='bg-white relative py-7 -mt-20  px-5 md:bg-transparent flex flex-col pr-2 md:py-10  justify-start gap-12 md:px-0 rounded-md mx-4 md:mx-0 md:-mt-0 md:rounded-none '>
       <div className='flex flex-col gap-2'>
       <h2 className='font-bold text-2xl md:text-4xl'>Personal info</h2>
        <p className='text-gray-500 text-[14px]md:text-[18px]'>Please provide your name, email address, and phone number.</p>
       </div>
        <form className='flex text-[14px] md:text-[16px] flex-col w-full gap-4'>
        <label className='flex  flex-col'>
          Name
          <input value={name}  onChange={(e)=>setName(e.target.value)} placeholder='e.g.stephen  king' className={`w-full ${nameerr && 'border-red-500'} border rounded-md px-4 focus:border-blue-900 py-2 outline-none`} type="text" />
          {nameerr && <h4 className='text-red-500 text-[12px] mt-1 '>{nameerr}</h4>}
         </label>
         <label className='flex flex-col'>
          Email Address
          <input value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='e.g.stephanking@gmail.com' required className={`w-full ${emailerr && 'border-red-500'} focus:border-blue-900 border rounded-md px-4 py-2 outline-none`} type="email" />
          {emailerr && <h4 className='text-red-500 text-[12px] mt-1 '>{emailerr}</h4>}
         </label>
         <label className='flex flex-col'>
          Phone Number
          <input value={phone}  onChange={(e)=>setPhone(e.target.value)} placeholder='e.g +1 234 567 890' className={`'w-full border ${phoneerr && 'border-red-500'} focus:border-blue-900 rounded-md px-4 py-2 outline-none'`} type="text" />
          {phoneerr && <h4 className='text-red-500 text-[12px] mt-1 '>{phoneerr}</h4>}

         </label>
        </form>
     </div>
     

    </div>
  )
}

export default Info