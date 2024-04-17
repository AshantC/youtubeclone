import {React, useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import Avatar from 'react-avatar';
import { GoSearch } from "react-icons/go";
import {useDispatch} from "react-redux";
import { toggleSidebar } from '../utils/appSlice';





const Navbar = () => {
    const dispatch = useDispatch();
    const toggleHandler = ()=>{
        dispatch(toggleSidebar());
    }
    return (
        <div className="container px-7 fixed h-14 bg-white items-center py-2.5 z-10">
            <div className='flex justify-between'>
                <div className='left-portion flex items-center gap-6'>
                    <RxHamburgerMenu size={22} onClick={toggleHandler} className='text-gray-800 cursor-pointer' />
                    <img width={"98px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/375px-YouTube_Logo_2017.svg.png" alt="" />

                </div>
                <div className='mid-portion w-[40%] flex items-center'>
                    <div className='search w-[100%]'>
                        <input className='border border-gray-400 rounded-l-2xl w-full outline-none px-4 py-4 h-9' type="text" placeholder='Search' />
                    </div>
                    <button className='border border-gray-400 rounded-r-2xl outline-none px-4 h-9 border-l-0 bg-gray-100'>
                        <GoSearch className='w-5 h-auto' />

                    </button>
                </div>
                <div className='right-portion flex gap-6 items-center'>
                    <RiVideoAddLine className='w-6 h-auto cursor-pointer' />
                    <IoMdNotificationsOutline className='w-6 h-auto cursor-pointer' />
                    <Avatar size={30} round={true} src='https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw'  className='cursor-pointer'/>
                </div>
            </div>

        </div>
    )
}

export default Navbar
