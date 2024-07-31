import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='w-[25%] md:w-[20%] h-[80vh]  bg-slate-900 rounded-br-xl'>
                <ul className='space-y-6 font-bold text-[12px] sm:text-lg p-6 text-center flex flex-col'>
                    <NavLink to={"/dashboard"} className='text-white hover:bg-blue-500 hover:rounded-lg hover:text-white hover:pl-3 hover:cursor-pointer'>DashBoard</NavLink>
                    <NavLink to={"/profile"} className='text-white hover:bg-blue-500 hover:rounded-lg hover:text-white hover:pl-3 hover:cursor-pointer'>Profile</NavLink>
                    <NavLink to={"/notes"} className='text-white hover:bg-blue-500 hover:rounded-lg hover:text-white hover:pl-3 hover:cursor-pointer'>Smart Notes</NavLink>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;