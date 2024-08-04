import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='w-[15%] sm:w-[8%] h-[50vh]  bg-slate-900 rounded-br-xl'>
                <ul className='space-y-6 font-bold text-[12px] sm:text-lg p-6 text-center flex items-center justify-center flex-col'>
                    <NavLink to={"/dashboard"} className='text-white'><i class="fa-solid fa-gauge hover:bg-blue-500 p-2 text-xl hover:rounded-md"></i></NavLink>
                    <NavLink to={"/profile"} className='text-white '><i class="fa-solid fa-user hover:bg-blue-500 p-2 text-xl hover:rounded-md"></i></NavLink>
                    <NavLink to={"/notes"} className='text-white'><i class="fa-regular fa-clipboard hover:bg-blue-500 text-xl p-2 hover:rounded-md"></i></NavLink>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;