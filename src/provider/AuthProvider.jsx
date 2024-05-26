import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const toastWarning = (toasting) => {
        toast.warning(toasting, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
    const toastSuccess = (toasting2) => {
        toast(toasting2, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    const allValues = {
        user,
        setUser,
        toastSuccess,
        toastWarning
    }
    return (
        <AuthContext.Provider value={allValues}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;