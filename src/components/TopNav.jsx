import React from "react";
import { FaBell, FaChevronRight, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const TopNav = ({ sideBarToggole, setSideBarToggole }) => {
  return (
    <nav className="bg-slate-800 px-4 py-3 flex justify-between ml-65 w-full">
      <div className="flex items-center text-white gap-5">
      <FaBars 
          className="font-semibold me-4 cursor-pointer" 
          onClick={() => setSideBarToggole(!sideBarToggole)} 
        />
      <FaChevronRight   className="text-white"/> 
    
        <span className="text-white font-semibold text-[18px]">
          Portfolio 
        </span>
      </div>

      

      <div className="flex items-center gap-5">
        <div className="relative md:w-65"> 
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input 
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block" 
            type="text" 
            placeholder="Search" 
          />
        </div>

        <div>
          <FaBell className="text-white w-6 h-6" />
        </div>

        <div className="relative">
          <button className="text-white w-6 h-6 group">
            <FaUserCircle className="text-white w-6 h-6 mt-1" />
            <div className="z-10 hidden absolute rounded-lg shadow-lg bg-white w-32 right-0 mt-2 group-hover:block">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 text-black">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-black">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-black">Logout</li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;