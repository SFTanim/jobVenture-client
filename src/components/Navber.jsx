import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import "../../src/App.css"


const Navber = () => {
    const { user, userLogout } = useContext(AuthContext);

    const navLinks =
        <>
            <li id="navBarLink"><NavLink to="/">Home</NavLink></li>
            <li id="navBarLink"><NavLink to="/allJobs">All Jobs</NavLink></li>
            {
                user &&
                <>
                    <li id="navBarLink"><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
                    <li id="navBarLink"><NavLink to="/addJob">Add a Job</NavLink></li>
                    <li id="navBarLink"><NavLink to="/myJobs">My Jobs</NavLink></li>
                </>
            }
            <li id="navBarLink"><NavLink to="/blogs">Blogs</NavLink></li>
            <li id="navBarLink"><NavLink to="/userProfile">User Profile</NavLink></li>
        </>

    const handleLogout = () => {
        userLogout()
            .then(() => {

            })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start w-fit">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            {
                                user ?
                                    <button className=" common-button">Logout</button> :
                                    <button className="common-button">Login</button>
                            }
                        </ul>
                    </div>
                    <div className="btn btn-ghost text-xl max-h-fit w-fit flex flex-row flex-nowrap">
                        <img className="max-h-6" src="https://i.ibb.co/FJQn36V/Default-Job-Venture-logo-2-removebg-preview2.png" alt="" />
                        <h2 className="">JobVenture</h2>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex w-full">
                    <ul className="menu flex flex-row flex-nowrap pr-4">
                        {
                            navLinks
                        }
                    </ul>
                    {
                        user ?
                            <button onClick={handleLogout} className=" common-button">Logout</button> :
                            <Link to='/login' className="common-button">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;