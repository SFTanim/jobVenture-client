import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import "../../src/App.css"


const Navber = () => {
    const { user, userLogout, setIsDark, isDark } = useContext(AuthContext);
    const navigate = useNavigate();

    const navLinks =
        <>
            <li id="navBarLink"><NavLink to="/">Home</NavLink></li>
            <li id="navBarLink"><NavLink to="/allJobs">All Jobs</NavLink></li>
            <li id="navBarLink"><NavLink to="/blogs">Blogs</NavLink></li>
            {
                user &&
                <>
                    <li id="navBarLink"><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
                    <li id="navBarLink"><NavLink to="/addJob">Add a Job</NavLink></li>
                    <li id="navBarLink"><NavLink to="/myJobs">My Jobs</NavLink></li>
                    <li className="tooltip tooltip-bottom " data-tip={user?.displayName} id="navBarLink">

                    <img className=" ml-2 max-h-10" src={user?.photoURL} alt="" />
                    </li>
                </>
            }
        </>

    const handleLogout = () => {
        userLogout()
            .then(() => {
                navigate('/')
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100 justify-between">
                <div className="navbar-start w-fit">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            {
                                user ?
                                    <button onClick={handleLogout} className=" common-button">Logout</button> :
                                    <Link to='/login' className="common-button">Login</Link>
                            }
                        </ul>
                    </div>
                    <div className="btn btn-ghost text-xl max-h-fit w-fit flex flex-row flex-nowrap">
                        <img className="max-h-6" src="https://i.ibb.co/FJQn36V/Default-Job-Venture-logo-2-removebg-preview2.png" alt="" />
                        <h2 className="">JobVenture</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
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
                <label className="cursor-pointer grid place-items-center">
                    <input
                        defaultChecked={isDark}
                        onClick={() => setIsDark(!isDark)}
                        type="checkbox"
                        value="synthwave"
                        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg
                        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>

                    <svg
                        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14" height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Navber;