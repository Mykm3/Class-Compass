import React from 'react'
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaStairs } from "react-icons/fa6";

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyish rounded-[10px] p-12   '>
      <form action=''>
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg  '>
          
            <div className='flex gap-2 items-center'>
                <AiOutlineSearch className='text-[25px] icon'/>
                <input type='text' placeholder='Search course by name....' className='bg-transparent text-blue-500 focus:outline-none w-[100]'/>
                <AiOutlineCloseCircle className='text-3xl text-[#a5a6a6] hover:text-textColor icon '/>
            </div>

            <div className='flex gap-2 items-center'>
                <AiOutlineClockCircle className='text-[25px] icon'/>
                <input type='text' placeholder='Select duration....' className='bg-transparent text-blue-500 focus:outline-none w-[100]'/>
                <AiOutlineCloseCircle className='text-3xl text-[#a5a6a6] hover:text-textColor icon '/>
            </div>

            <div className='flex gap-2 items-center'>
                <FaStairs className='text-[25px] icon'/>
                <input type='text' placeholder='Select level....' className='bg-transparent text-blue-500 focus:outline-none w-[100]'/>
                <AiOutlineCloseCircle className='text-3xl text-[#a5a6a6] hover:text-textColor icon '/>
            </div>

            <button className='bg-bluecolor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:opacity-90'>Search</button>

          </div>
      </form>
    
    <div className='secDiv flex items-center gap-10 justify-center'>
      <div className='singleSearch flex items-center gap-2 rounded-lg shadow-lg'> 
        <label htmlFor='relevance' className='text-[#808080] font-semibold pl-2  '>Sort by:</label>
        <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
          <option value="">Rating</option>
          <option value="">Level</option>
          <option value="">Facilitator</option>
          <option value="">Cost</option>
          <option value="">Duration</option>
          </select>
      </div>
      
      <div className='singleSearch flex items-center gap-2 rounded-lg shadow-lg'> 
        <label htmlFor='relevance' className='text-[#808080] font-semibold pl-2  '>Sort by:</label>
        <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
          <option value="">Rating</option>
          <option value="">Level</option>
          <option value="">Facilitator</option>
          <option value="">Cost</option>
          <option value="">Duration</option>
          </select>
      </div>

      <div className='singleSearch flex items-center gap-2 rounded-lg shadow-lg'> 
        <label htmlFor='relevance' className='text-[#808080] font-semibold pl-2  '>Sort by:</label>
        <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
          <option value="">Rating</option>
          <option value="">Level</option>
          <option value="">Facilitator</option>
          <option value="">Cost</option>
          <option value="">Duration</option>
          </select>
      </div>

      <div className='singleSearch flex items-center gap-2 rounded-lg shadow-lg'> 
        <label htmlFor='relevance' className='text-[#808080] font-semibold pl-2  '>Sort by:</label>
        <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
          <option value="">Rating</option>
          <option value="">Level</option>
          <option value="">Facilitator</option>
          <option value="">Cost</option>
          <option value="">Duration</option>
          </select>
      </div>

      <span className='text-[#a1a1a1] cursor-pointer hover:text-bluecolor'>Clear all</span>
    </div>
    
    </div>
  )
}

export default Search