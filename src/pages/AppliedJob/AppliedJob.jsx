import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";



const AppliedJob = () => {
    const { user } = useContext(AuthContext);
    const [allJobs, setAllJobs] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/allPostsData')
            .then(res => setAllJobs(res.data?.filter(job => job.appliedPersons?.find(data => data?.email === user.email))))
    }, [axiosSecure, user?.email])

    console.log(allJobs);

    return (
        <div className="min-h-screen">
            <h2 className="text-2xl lg:text-5xl mx-auto w-fit border-[#FF4949] border-b-4 mb-8">Applied Jobs</h2>
            <div className="flex flex-col gap-3">
                {
                    allJobs?.map((data, idx) =>
                        <div key={idx} className="card border bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl underline">{data.userName}</h2>
                                <h3 className=""><span className="font-bold">Job Title:</span> {data.jobCategory}</h3>
                                <h3 className=""><span className="font-bold">Job Title:</span> {data.jobTitle}</h3>
                                <h3 className=""><span className="font-bold">Salary: </span>{data.salaryRange}</h3>
                                <h3 className=""><span className="font-bold">Posted: </span>{data.postingDate}</h3>
                                <h3 className=""><span className="font-bold">Deadline: </span>{data.ApplicationDeadLine}</h3>
                                <div className="card-actions justify-end">
                                    <Link to={`/allPostsData/${data?._id}`} className="card-common-button">View Details</Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;