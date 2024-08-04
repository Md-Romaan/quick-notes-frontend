import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {

    const para1 = "This is just a simple portfolio, which has the other features like, Register your account to become a member, login to your account and also it comes with some simple feature like you can make your notes and it will be saved with that account, you can access those notes from anywhere just by login."
    const para2 = "In the future, adding some more features like everyone who has their account can post blogs, and many more features.";

    return (
        <>
            <div className='my-5'>
                <div className='mx-10 sm:mx-16'>
                    <h1 className='text-3xl font-bold text-center text-blue-800 font-serif'>About</h1>
                    <p className='italic font-bold mt-5 text-justify'>
                        {para1}
                    </p>

                    <p className='italic font-bold mt-4 text-justify'>
                        {para2}
                    </p>

                    <p className='italic font-bold mt-4 text-red-500'>
                        Hurry up! Become my member, <NavLink to={"/register"} className="text-blue-700 underline hover:text-blue-950">Register</NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;