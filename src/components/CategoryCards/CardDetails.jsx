import { useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const load = useLoaderData();
    console.log( load.data);
    return (
        <div>
            <div className="card border bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <h3 className=""><span className="font-bold">Job Category:</span> {load.data.category}</h3>
                    <h3 className=""><span className="font-bold">Job Title:</span> {load.data.jobTitle}</h3>
                    <h3 className=""><span className="font-bold">Salary: </span>{load.data.salaryRange}</h3>
                    <h3 className=""><span className="font-bold">Posted: </span>{load.data.jobPostingDate}</h3>
                    <h3 className=""><span className="font-bold">Deadline: </span>{load.data.applicationDeadline}</h3>
                    <h3 className=""><span className="font-bold">Job Applicants Number: </span>{load.data.jobApplicantsNumber}</h3>
                   
                </div>
            </div>
        </div>
    );
};

export default CardDetails;