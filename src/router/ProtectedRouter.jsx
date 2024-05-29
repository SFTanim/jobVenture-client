import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';



const ProtectedRouter = ({ children }) => {
    const { user,  loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children
};

ProtectedRouter.propTypes = {
    children: PropTypes.object
}

export default ProtectedRouter;