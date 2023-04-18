import React from 'react'
import {  RiSearch2Line
     } 

    from "react-icons/ri";
const Header = () => {
  return (
    <header>
    {/*Title & Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
      <div>
        <h1 className="text-2xl text-gray-300">Alonso & Dany</h1>
        <p className="text-gray-500">15 Abril 2023</p>
      </div>
      <form>
        <div className="w-full relative">
          <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
        <input type="text" placeholder="Search" className="bg-[#1f1D2B] w-full py-2 pl-8 pr-4 text-gray-300 rounded-lg outline-none" />
        </div>
       
      </form>
      </div>
    {/*Tabs */}
       <nav className="mb-6 text-gray-300 flex item-center justify-between md:justify-start md:gap-8 border-b">
        <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">Hot dishes</a>
        <a href="#" className="py-2 pr-4">Cool dishes</a>
        <a href="#" className="py-2 pr-4">Soup</a>
        <a href="#" className="py-2 pr-4">Grill</a>
    
       </nav>
       </header>
  )
}

export default Header