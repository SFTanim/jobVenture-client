// import Logo from './assets/404-page-not-found.svg'
import { Link, useRouteError } from 'react-router-dom';
import Logo from '../assets/404-page-not-found.svg'
import { IoIosReturnLeft } from "react-icons/io";



const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className='w-1/2 mx-auto mt-14 flex flex-col items-center space-y-4'>
            <img src={Logo} alt="" />
            <h2 className="font-bold text-2xl lg:text-4xl">{`${error.status} - ${error.statusText}`}</h2>
            <Link to="/" className='btn btn-secondary'>Home <IoIosReturnLeft className='text-xl' /></Link>
        </div>
    );
};

export default ErrorPage;