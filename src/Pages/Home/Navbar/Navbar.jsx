import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineSearch } from 'react-icons/hi';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// import Logo from '../../../../public/assets/icons/logo.eps';



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            About
        </NavLink>
        <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            services
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Blog
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Contact
        </NavLink>
        {
            user?.email &&
            <NavLink
                to="/bookings"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Bookings
            </NavLink>
        }
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Log Out successfully')
                Swal.fire({
                    title: 'Success!',
                    text: 'Log Out Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="navbar h-24 mb-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl hidden lg:flex"><img className="h-16" src="/assets/logo.svg" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-5 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex text-2xl space-x-5">
                    <span><HiOutlineShoppingBag></HiOutlineShoppingBag></span>
                    <span><HiOutlineSearch></HiOutlineSearch></span>
                </div>
                {
                    user?.email ?
                        <>
                            <p className="text-xs ml-2">{user?.email}</p>
                            <button onClick={handleLogOut} className="btn btn-secondary ml-2">Log out</button>
                        </> :
                        <Link to="/signIn">
                            <button className="btn ml-8 btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-none hover:text-white">Appointment</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;