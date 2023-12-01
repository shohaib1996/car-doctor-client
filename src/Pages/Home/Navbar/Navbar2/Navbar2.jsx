import { NavLink } from "react-router-dom";


const Navbar2 = () => {
    const navLinks = <>
        <NavLink
            to="/order"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Order
        </NavLink>
        <NavLink
            to="/orderReview"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Order Review
        </NavLink>
        <NavLink
            to="/inventory"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Manage Inventory
        </NavLink>
        <NavLink
            to="/signIn"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Login
        </NavLink>
        
    </>
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
                <a className="btn btn-ghost normal-case text-xl"><img className="h-16" src="/assets/logo.svg" alt="" /></a>
            </div>
    
            <div className="navbar-end">
                <ul className="space-x-5 menu-horizontal px-1">
                    {navLinks}
                </ul>

            </div>
        </div>
    );
};

export default Navbar2;