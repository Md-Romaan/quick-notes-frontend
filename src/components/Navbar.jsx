import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { token } = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
        toast.success("Logout success");
    }

    return (
        <>
            <div className="navbar sticky top-0  bg-blue-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow-lg space-y-3 text-2xl font-bold">

                            {/* Mobile menus Navbar------------------ */}

                            <li><NavLink to={"/"} className="py-3">Home</NavLink></li>
                            <li><NavLink to={"/about"} className="py-3">About</NavLink></li>


                            {
                                token ? <li><NavLink to={"/dashboard"} className="py-3">Dashboard</NavLink></li> :
                                    <li><NavLink to={"/login"} className="py-3">Login</NavLink></li>
                            }

                            {
                                !token && <li><NavLink to={"/register"} className="py-3">Sign Up</NavLink></li>
                            }

                            <li><NavLink to={"/contact"} className="py-3">Contact</NavLink></li>

                            {
                                token && <li><Link onClick={handleLogout} className="py-3">Logout</Link></li>
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-extrabold text-blue-700 font-edu">M.R</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-bold">

                        {/* Desktop menus Navbar---------------------------------- */}

                        <li><NavLink to={"/"}>Home</NavLink></li>

                        <li><NavLink to={"/about"}>About</NavLink></li>

                        {
                            token ? <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li> :
                                <li><NavLink to={"/login"}>Login</NavLink></li>
                        }

                        {
                            !token && <li><NavLink to={"/register"}>Sign Up</NavLink></li>
                        }

                        <li><NavLink to={"/contact"}>Contact</NavLink></li>

                        {
                            token && <li><Link onClick={handleLogout}>Logout</Link></li>
                        }

                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}

                    </ul>
                </div>

                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </>
    )
}

export default Navbar;