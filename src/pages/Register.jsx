import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { toast } from 'react-toastify'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Register = () => {

    const token = useSelector(state => state.user.token);

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, [])



    const handleSubmit = async (e) => {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        let data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.password) {
            toast.error("Invalid! form submit")
        }

        try {
            const response = await axios.post("/user/register", data);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/login");
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }


    return (
        <>
        
            <div onSubmit={handleSubmit} className='w-full h-[100vh] bg-blue-500 flex justify-center items-center'>
                <div className="border bg-white p-7 rounded-xl">
                    <h1 className='text-center font-bold text-xl mb-4'>Signup</h1>
                    <form className="space-y-5 flex flex-col justify-center items-center">
                        <div className=''>
                            <input type="text" name="name" id="name" className='border border-gray-400 rounded-md p-1 w-[50vw] pl-3 sm:w-[40vw] md:w-[30vw] lg:w-[25vw]' placeholder='Name' />
                        </div>

                        <div className=''>
                            <input type="email" name="email" id="email" className='border border-gray-400 rounded-md p-1 w-[50vw] pl-3 sm:w-[40vw] md:w-[30vw] lg:w-[25vw]' placeholder='Email' />
                        </div>

                        <div className=''>
                            <input type="password" name="password" id="password" className='border border-gray-400 rounded-md p-1 w-[50vw] pl-3 sm:w-[40vw] md:w-[30vw] lg:w-[25vw]' placeholder='password' />
                        </div>

                        <button type='submit' className='bg-indigo-600  p-2 rounded-md text-white hover:bg-indigo-500 pl-3 fontb w-[50vw]  sm:w-[40vw] md:w-[30vw] lg:w-[25vw]'>
                            Signup
                        </button>

                        <p className='text-center text-sm'>
                            Already have an account?
                            <NavLink to={"/login"} className='text-blue-700 font-bold'>login</NavLink>
                        </p>
                    </form>
                </div>

            </div>


        </>
    )
}

export default Register