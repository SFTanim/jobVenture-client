import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Root = () => {
    const { isDark } = useContext(AuthContext);

    return (
        <div className="font-poppins" data-theme={isDark ? "dark" : "light"}>
            <Navber></Navber>
            <div className="container mx-auto p-3">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;