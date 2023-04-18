import React from 'react'
import { RiHome4Line,RiPercentLine,RiPieChart2Line,RiMailOpenLine,RiBellLine,RiSettings3Line,RiLogoutBoxRLine } from "react-icons/ri";
const Siderbar = (props) => {
  const {showMenu} = props;
  return (
    <div className={`bg-[#1f1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col 
                    justify-between py-6 rounded-tr-xl rounded-br-xl transition-all z-50
                     ${showMenu ? "left-0": "-left-full" }`}>
        <div>
        <ul className="pl-4">
          <li className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>
             Logo
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a href="#" className='bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white'>
            <RiHome4Line className='text-2xl' />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'>
            <RiPercentLine className='text-2xl' /></a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'>
            <RiPieChart2Line className='text-2xl' /></a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'>
            <RiMailOpenLine className='text-2xl' /></a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'>
            <RiBellLine className='text-2xl' /></a>
          </li>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'>
            <RiSettings3Line className='text-3xl' /></a>
          </li>
          
         
        </ul>
        </div>
        <div>
          <ul className='pl-4'>
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white'>
            <RiLogoutBoxRLine className='text-2xl' /></a>
          </li>
          
          </ul>
        </div>
       
    </div>
  )
}

export default Siderbar