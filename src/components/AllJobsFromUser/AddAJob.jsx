import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCurrentDate from "../../hooks/useCurrentDate";
import { useNavigate } from "react-router-dom";


const AddAJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    const { user,toastSuccess } = useContext(AuthContext);

    const currentDate = useCurrentDate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const jobTitle = form.jobTitle.value;
        const jobCategory = form.category.value;
        const bannerPic = form.bannerPic.value;
        const postingDate = form.postingDate.value;
        const applicantNumber = parseInt(form.applicantNumber.value);
        const jobDescription = form.description.value;
        const ApplicationDeadLine = form.deadLine.value;
        const salaryRange = form.salary.value;
        const userEmail = user.email;
        const userName = user.displayName;

        console.log(jobTitle, postingDate, jobDescription, ApplicationDeadLine, salaryRange, userEmail, userName);
        axiosSecure.post('/allPostsData', {
            userName: userName,
            userEmail: userEmail,
            jobTitle: jobTitle,
            jobCategory: jobCategory,
            postingDate: postingDate,
            bannerPic: bannerPic,
            jobDescription: jobDescription,
            applicantNumber: applicantNumber,
            ApplicationDeadLine: ApplicationDeadLine,
            salaryRange: salaryRange,
        })
        .then(() => {
            navigate('/myJobs')
        })
        .then(() => {
            toastSuccess('Post Added Successfully');
        })

    }

    return (
        <div className="mx-auto p-10">
            <h2 className="text-2xl lg:text-5xl mx-auto w-fit border-[#FF4949] border-b-4 mb-8">Add A New Job Post</h2>

            <form onSubmit={handleSubmit} className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">Job Title</span>
                        </div>
                        <input name="jobTitle" type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">Job Category</span>
                        </div>
                        <select className="select select-bordered w-full" name="category" id="">
                            <option value="OnSite">On Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">Job Posting Date</span>
                        </div>
                        <input name="postingDate" type="text" defaultValue={currentDate} className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">Job Banner</span>
                        </div>
                        <input name="bannerPic" placeholder="Banner PhotoUrl" type="text" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">Application Deadline</span>
                        </div>
                        {/* <input name="deadLine" type="date" className="input input-bordered w-full " /> */}
                        <DatePicker name='deadLine' className="input input-bordered w-full " selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>

                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">Job Descriptiion</span>
                        </div>
                        <input name="description" type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">Salary Range</span>
                        </div>
                        <input name="salary" type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">Job Applicants Number</span>
                        </div>
                        <input defaultValue={0} name="applicantNumber" type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">User Name</span>
                        </div>
                        <input type="text" value={user.displayName} className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <div className="label">
                            <span className="text-lg lg:text-2xl">User Email</span>
                        </div>
                        <input type="text" value={user.email} className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control w-full mt-10 col-span-2">
                    <input type="submit" value="Submit" className="card-common-button" />
                </div>
            </form>
        </div>
    );
};

export default AddAJob;