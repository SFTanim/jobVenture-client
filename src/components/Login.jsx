import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";




const Login = () => {
    const { userLogin, toastSuccess, toastWarning, githubLogin, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()



    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const userEmail = form.email.value;
        const userPassword = form.password.value;

        if (!userEmail) {
            return toastWarning('Please enter your Email')
        }
        else if (!userPassword) {
            return toastWarning('Please enter your Password')
        }

        userLogin(userEmail, userPassword)
            .then(() => {
                toastSuccess('Login Susscessful')
                {
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch((error) => {
                if (error.code == 'auth/invalid-email') {
                    toastWarning("Please provide a valid email")
                }
                else if (error.code == 'auth/invalid-credential') {
                    toastWarning("Please provide a valid Password")
                }
                console.log(error.code)
            })
    }

    const handleGoogleLogIn = () => {
        googleLogin()
            .then((res) => {
                console.log(res)
                toastSuccess('Successfull Google login')
                {
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(error => {
                console.log(error.message)
                toastWarning('Unsuccessful Google login')
            })
    }
    const handleGithubLogIn = () => {
        githubLogin()
            .then((res) => {
                console.log(res)
                toastSuccess('Successfull github login')
                {
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(error => {
                console.log(error.message)
                toastWarning('Unsuccessful github login')
            })
    }


    return (
        <div className="w-1/2 mx-auto text-center my-10 font-bold">
            <h2 className="text-4xl mb-4">Login</h2>
            {
                location?.state ?
                    <h2 className=" text-red-600">*You have to login first</h2> :
                    <h2></h2>
            }
            <form onSubmit={handleLogin} className="text-left">
                <div className="my-2 ">
                    <span className="text-xl font-semibold">Email</span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input name="email" type="text" className="grow" />
                </label>
                <div className="my-2 ">
                    <span className="text-xl font-semibold">Password</span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input name="password" type="password" className="grow" />
                </label>
                <button className="w-full common-button my-4 text-base uppercase">Sign In</button>
            </form>
            <div className="">
                <p className="my-3">Or Login with</p>
                <div className="text-6xl space-x-3">
                    <button onClick={handleGoogleLogIn} className=""> <FcGoogle /> </button>
                    <button onClick={handleGithubLogIn} className="text-black"> <FaGithubSquare /> </button>
                </div>
            </div>
            <Link className="font-normal underline" to='/register'>Create an Account</Link>
        </div>
    );
};

export default Login;