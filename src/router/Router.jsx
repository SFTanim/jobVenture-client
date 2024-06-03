import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../components/Root";
import Register from "../components/Register";
import Login from "../components/Login";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRouter from "./ProtectedRouter";
import Blogs from "../pages/Blogs";
import CardDetails from './../components/CategoryCards/CardDetails';
import JobsFromUser from "../components/AllJobsFromUser/JobsFromUser";
import AddAJob from './../components/AllJobsFromUser/AddAJob';
import AllJobs from "../pages/AllJobs/AllJobs";
import AppliedJob from "../pages/AppliedJob/AppliedJob";


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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addJob',
                element: <AddAJob></AddAJob>
            },
            {
                path: '/myJobs',
                element: <JobsFromUser></JobsFromUser>
            },
            {
                path: '/appliedJobs',
                element: <AppliedJob></AppliedJob>
            },
            {
                path: '/allJobs',
                element: <AllJobs></AllJobs>
            },
            {
                path: '/allCategory/:id',
                element: <ProtectedRouter><CardDetails></CardDetails></ProtectedRouter>
            },
            {
                path: '/allPostsData/:id',
                element: <ProtectedRouter><CardDetails></CardDetails></ProtectedRouter>
            },
        ]
    },
]);

export default router;