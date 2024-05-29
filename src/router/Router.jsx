import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../components/Root";
import Register from "../components/Register";
import Login from "../components/Login";
import ErrorPage from "../pages/ErrorPage";
import CardDetails from "../components/CategoryCards/CardDetails";



const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path: '/cardDetails:id',
                element: <CardDetails></CardDetails>,
            },
        ]
    },
]);

export default router;