import { Link } from "react-router-dom";
import { HiLink } from "react-icons/hi";
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;
        console.log(name, email, password, photoUrl);
    }
    return (
        <div>
            <div className="mx-auto text-center my-10 text-black font-bold flex flex-col items-center">
                <h2 className="text-4xl mb-4"><span className="text-[#FF4949]">Welcome!</span> Create Your Account</h2>
                <form onSubmit={handleRegister} className="text-left">
                    <div className="flex flex-col lg:flex-row gap-2 w-full">

                        <div className="my-2 flex flex-col flex-1 gap-2">
                            <span className="text-xl font-semibold">Name</span>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input name="name" type="text" className="grow" />
                            </label>
                        </div>
                        <div className="my-2 flex flex-col flex-1 gap-2">
                            <span className="text-xl font-semibold">Email</span>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input name="email" type="text" className="grow" />
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-2">
                        <div className="my-2 flex flex-col flex-1 gap-2">
                            <span className="text-xl font-semibold">Password</span>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input name="password" type="password" className="grow" />
                            </label>
                        </div>
                        <div className="my-2 flex flex-col flex-1 gap-2">
                            <span className="text-xl font-semibold">Photo URL</span>
                            <label className="input input-bordered flex items-center gap-2">
                                <HiLink />
                                <input name="photo" type="text" className="grow" />
                            </label>
                        </div>
                    </div>

                    <button className="w-full common-button my-4 py-4 text-base uppercase">Create</button>
                </form>
                <Link to='/login' className="underline">Or Sign In</Link>
            </div>

        </div>
    );
};

export default Register;