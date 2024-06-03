import {  useLoaderData } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useCurrentDate from "../../hooks/useCurrentDate";


const CardDetails = () => {
    const { user } = useContext(AuthContext)
    const load = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const currentDate = new Date(useCurrentDate());
    const deadLine = new Date(load?.data?.ApplicationDeadLine);

    const handleApplied = (event) => {
        event.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const addAApplicant = load?.data?.applicantNumber + 1;
        const resume = event.target.resume.value;
        console.log(resume);
        const appliedPerson = { name, email, resume }
        axiosSecure.post(`/allApplied/${load.data?._id}`, { appliedPerson, addAApplicant })
            .then(() => {
                window.location.reload()
            })

    }
    return (
        <div>
            <div className="card border bg-base-100 shadow-xl">
                <div className="card-body flex-col lg:flex-row">
                    <div className="flex-1">
                        <img src={load.data?.bannerPic} className="rounded-xl w-full" alt="" />
                    </div>
                    <div className="flex-1">
                        <h2 className="card-title text-2xl underline">{load.data?.name || load.data?.userName}</h2>
                        <h3 className=""><span className="font-bold">Job Category:</span> {load?.data?.category || load.data?.jobCategory}</h3>
                        <h3 className=""><span className="font-bold">Job Title:</span> {load?.data?.jobTitle}</h3>
                        <h3 className=""><span className="font-bold">Salary: </span>{load?.data?.salaryRange}</h3>
                        <h3 className=""><span className="font-bold">Posted: </span>{load?.data?.jobPostingDate || load.data?.postingDate}</h3>
                        <h3 className=""><span className="font-bold">Deadline: </span>{load?.data?.applicationDeadline || load.data?.ApplicationDeadLine}</h3>
                        <h3 className=""><span className="font-bold">Job Applicants Number: </span>{load?.data?.jobApplicantsNumber || load.data?.applicantNumber}</h3>
                        {/* The button to open modal */}
                        {
                            user?.email == load?.data?.appliedPersons?.find(data => data?.email == user?.email)?.email ?
                                <div className="text-right text-[#FF4949] font-bold">
                                    <p>You Already applied for this job</p>
                                </div>
                                :
                                currentDate > deadLine ?
                                    <div className="text-right text-[#FF4949] font-bold">
                                        <p>You Cross The DeadLine</p>
                                    </div>
                                    :
                                    <div className="text-right">
                                        <label htmlFor="my_modal_6" className="card-common-button">Apply Now!</label>
                                    </div>
                        }
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form className="" onSubmit={handleApplied}>
                        <div className="mb-5">
                            <div className="label">
                                <span className="">Your name</span>
                            </div>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input value={user?.displayName} type="text" className="grow" placeholder="Username" />
                            </label>
                        </div>

                        <div className="mb-5">
                            <div className="label">
                                <span className="">Your email</span>
                            </div>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input value={user?.email} type="text" className="grow" placeholder="Email" />
                            </label>
                        </div>

                        <div className="mb-5">
                            <div className="label">
                                <span className="">Submit Your Resume</span>
                            </div>
                            <label className="input input-bordered flex items-center gap-2">
                                <IoDocumentTextOutline />

                                <input name="resume" type="text" className="grow" placeholder="Resume Url" required />
                            </label>
                        </div>
                        <div className="text-center">
                            <input className="card-common-button" type="submit" value="Submit" />
                        </div>
                        <div className="modal-action flex justify-center">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;