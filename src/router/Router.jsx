import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../components/Root";
import Register from "../components/Register";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
]);

export default router;