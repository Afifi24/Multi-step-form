import React from 'react'
import img1 from '../images/bg-sidebar-desktop.svg'
import img2 from '../images/bg-sidebar-mobile.svg'
const Nav = ({index}) => {
  return (
   <div>
    {/* destop */}
     <div className='hidden md:block h-full  relative mx-10 my-auto ' >
              <img className='   ' src={img1} alt="" />
              <div className='absolute top-10 itmes-center justify-center left-6 flex flex-col gap-10'>
                  <div className='flex justify-center items-center gap-4'>
                      <div className={`w-8 h-8 ${index === 0 ? 'bg-green-500':''} rounded-full flex items-center justify-center text-white border`}>1</div>
                      <div>
                        <p className='text-gray-300 uppercase text-[12px]'>step 1</p>
                        <h4 className='uppercase tracking-[2px] text-white font-bold text-[13px]'>your info</h4>
                      </div>
                  </div>
                  <div className='flex justify-center items-center gap-4'>
                  <div className={`w-8 h-8 ${index === 1 ? 'bg-green-500':''} rounded-full flex items-center justify-center text-white border`}>2</div>
                      <div>
                        <p className='text-gray-300 uppercase text-[12px]'>step 2</p>
                        <h4 className='uppercase tracking-[2px] text-white font-bold text-[13px]'>select plan</h4>
                      </div>
                  </div>
                  <div className='flex justify-center items-center gap-4'>
                  <div className={`w-8 h-8 ${index === 2 ? 'bg-green-500':''} rounded-full flex items-center justify-center text-white border`}>3</div>
                      <div>
                        <p className='text-gray-300 uppercase text-[12px]'>step 3</p>
                        <h4 className='uppercase tracking-[2px] text-white font-bold text-[13px]'>add-ons</h4>
                      </div>
                  </div>
                  <div className='flex justify-center items-center gap-4'>
                  <div className={`w-8 h-8 ${index === 3 ? 'bg-green-500':''} rounded-full flex items-center justify-center text-white border`}>4</div>
                      <div>
                        <p className='text-gray-300 uppercase text-[12px]'>step 4</p>
                        <h4 className='uppercase tracking-[2px] text-white font-bold text-[13px]'> summary</h4>
                      </div>
                  </div>
              </div>
    </div>
    {/* mobile */}
     <div className='md:hidden relative w-full'>
              <img className='h-full w-full' src={img2} alt="" />
              <div className='absolute flex gap-6 left-1/2 top-6 -translate-x-1/2'>
                      <div className='w-8 h-8 rounded-full flex items-center justify-center text-white bg-red-500'>1</div>
                      <div className='w-8 h-8 rounded-full flex items-center justify-center text-white bg-red-500'>2</div>
                      <div className='w-8 h-8 rounded-full flex items-center justify-center text-white bg-red-500'>3</div>
                      <div className='w-8 h-8 rounded-full flex items-center justify-center text-white bg-red-500'>4</div>
                
                  
              </div>
     </div>
   </div>
  )
}

export default Nav