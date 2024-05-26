import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;