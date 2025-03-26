import React from 'react';
import { FaHome , FaBlogger, FaServicestack, } from "react-icons/fa";
import { FaColonSign, FaHandsBound, FaLifeRing } from 'react-icons/fa6';
import { IoMdContacts } from 'react-icons/io';
import { IoLogIn } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Sidbar = ({sideBarToggole}) => {
    return (
        <>
            <div className={`${sideBarToggole? "hidden" : "block"} w-64 bg-slate-800  fixed h-full px-4 py-2 `}>
                <div className='m-2'>
                    <img className='w-20% ' src='/download.svg' alt="" />
                   
                </div>
                <hr />
                <ul className='text-white'>
                  <Link to='#'>
                  <li className='mb-2 hover:bg-blue-700 flex p-2 items-center mt-3 rounded gap-3 text-[18px] font-medium transition duration-700'> <FaHome /> <Link to="#"> Home</Link></li>
                  </Link>
                  <Link to='#'>
                  <li className='mb-2 hover:bg-blue-700 flex p-2 items-center mt-3 rounded gap-3 text-[18px] font-medium transition duration-700'> <FaHandsBound /> <Link to="#"> About</Link></li>
                  </Link>
                  <Link to='#'>
                  <li className='mb-2 hover:bg-blue-700 flex p-2 items-center mt-3 rounded gap-3 text-[18px] font-medium transition duration-700'> <FaBlogger /> <Link to="#"> Blog</Link></li>
                  </Link>
                  <Link to='#'>
                  <li className='mb-2 hover:bg-blue-700 flex p-2 items-center mt-3 rounded gap-3 text-[18px] font-medium transition duration-700'> <FaServicestack /> <Link to="#">Service</Link></li>
                  </Link>
                  <Link to='#'>
                  <li className='mb-2 hover:bg-blue-700 flex p-2 items-center mt-3 rounded gap-3 text-[18px] font-medium transition duration-700'> <IoMdContacts /> <Link to="#"> Contact</Link></li>
                  </Link>
                  <Link to='#'>
                  <li className='mb-2 hover:bg-blue-700 flex p-2 items-center mt-3 rounded gap-3 text-[18px] font-medium  transition duration-700 '> <IoLogIn /> <Link to="#"> Login</Link></li>
                  </Link>



                </ul>
            </div>
        </>
    );
};

export default Sidbar;