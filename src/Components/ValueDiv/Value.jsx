import React from 'react'
import cyber1 from'../../Assets/cyber1.png'
import cyber2 from'../../Assets/cyber2.png'
import cloud from'../../Assets/cloud.png'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] px-[2rem] font-bold w-[700px] block'>
        The Goals of Class Compass that we Value</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        

      <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] ml-14 '>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-green-500 h-[40px] w-[40px] flex items-center justify-center '>
              <img src={cyber2} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Availabilty
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] w-[300px] font-semibold'>
            Display of courses in the most simple and concise way is at the heart of everything we do.
          </p>

        </div>


        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]  '>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-pink-500 h-[40px] w-[40px] flex items-center justify-center '>
              <img src={cloud} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Credibility
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] w-[300px] font-semibold'>
            Display of courses in the most simple and concise way is at the heart of everything we do.
          </p>

        </div>
        
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] mr-14 '>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-yellow-500 h-[40px] w-[40px] flex items-center justify-center '>
              <img src={cyber1} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] w-[300px] font-semibold'>
            Display of courses in the most simple and concise way is at the heart of everything we do.
          </p>

        </div>
      </div>
    </div>
  )
}

export default Value