import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import DatePicker from "react-datepicker";


const JobsFromUser = () => {
    const [targetedData, setTargetedData] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [myPosts, setMyPosts] = useState();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    // console.log(myPosts);


    useEffect(() => {
        axiosSecure.get(`/allPostsDataWithMail/${user?.email}`)
            .then(res => setMyPosts(res.data))
    }, [axiosSecure, user?.email]);


    // Update Data
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const jobTitle = form.jobTitle.value;
        const jobCategory = form.category.value;
        const bannerPic = form.bannerPic.value;
        const postingDate = form.postingDate.value;
        const applicantNumber = form.applicantNumber.value;
        const jobDescription = form.description.value;
        const ApplicationDeadLine = form.deadLine.value;
        const salaryRange = form.salary.value;
        const newData = { jobTitle, postingDate, jobDescription, ApplicationDeadLine, salaryRange, jobCategory, bannerPic, applicantNumber }
        console.log(newData);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/allPostsData/${targetedData?._id}`, newData)
                    .then(() => {
                        window.location.reload()
                    })
            }
        });

    }

    // Delete Data
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/allPostsData/${id}`)
                    .then(() => {
                        window.location.reload()
                    })
            }
        });
    }

    return (
        <div className="min-h-screen">
            <h2 className="text-2xl lg:text-5xl mx-auto w-fit border-[#FF4949] border-b-4 mb-8">My Jobs Post</h2>
            <div className="border">
                <div className="overflow-x-auto">
                    <table className="static md:table">
                        {/* head */}
                        <thead className="text-lg text-center">
                            <tr>
                                <th>Job Title</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myPosts?.map((post, idx) =>
                                    <tr key={idx} className="text-center" id="click">
                                        <td className="">
                                            <img src={post.bannerPic} className="mx-auto h-16" alt="" />
                                            <h2 className=""><span className="font-bold">Job Title: </span>{post?.jobTitle}</h2>
                                            <h2 className=""><span className="font-bold">Job Category: </span>{post?.jobCategory}</h2>
                                            <h2 className=""><span className="font-bold">Job Description: </span>{post?.jobDescription}</h2>
                                            <h2 className=""><span className="font-bold">Posting Date: </span>{post?.postingDate}</h2>
                                            <h2 className=""><span className="font-bold">Application Deadline: </span>{post?.ApplicationDeadLine}</h2>
                                            <h2 className=""><span className="font-bold">Job Applicants Number: </span>{post?.applicantNumber}</h2>
                                        </td>
                                        <td className="text-3xl ">
                                            <div className="mx-auto w-fit ">
                                                <label htmlFor="my_modal_6" className="">
                                                    <div onClick={() => setTargetedData(post)} className="common-button"><RxUpdate /></div>
                                                </label>
                                            </div>
                                        </td>

                                        <td className="text-3xl "><div className="mx-auto w-fit common-button " onClick={() => handleDelete(post._id)}><RiDeleteBin5Line /></div></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>





            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form onSubmit={handleUpdate} className="">
                        <div className="flex flex-col gap-4">
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="text-lg lg:text-2xl">Job Title</span>
                                </div>
                                <input defaultValue={targetedData?.jobTitle} name="jobTitle" type="text" placeholder="Type here" className="input input-bordered w-full " />
                            </div>

                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="text-lg lg:text-2xl">Job Category</span>
                                </div>
                                <select defaultValue={targetedData?.jobCategory} className="select select-bordered w-full" name="category" id="">
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
                                <input defaultValue={targetedData?.postingDate} name="postingDate" type="text" className="input input-bordered w-full " />
                            </div>

                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="text-lg lg:text-2xl">Job Banner</span>
                                </div>
                                <input defaultValue={targetedData?.bannerPic} name="bannerPic" placeholder="Banner PhotoUrl" type="text" className="input input-bordered w-full " />
                            </div>

                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="text-lg lg:text-2xl">Application Deadline</span>
                                </div>
                                <DatePicker defaultValue={targetedData?.ApplicationDeadLine} name='deadLine' className="input input-bordered w-full " selected={startDate} onChange={(date) => setStartDate(date)} />

                            </div>

                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="text-lg lg:text-2xl">Job Descriptiion</span>
                                </div>
                                <input defaultValue={targetedData?.jobDescription} name="description" type="text" placeholder="Type here" className="input input-bordered w-full " />
                            </div>

                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="text-lg lg:text-2xl">Salary Range</span>
                                </div>
                                <input defaultValue={targetedData?.salaryRange} name="salary" type="text" placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="text-lg lg:text-2xl">Job Applicants Number</span>
                                </div>
                                <input defaultValue={targetedData?.applicantNumber} name="applicantNumber" type="number" placeholder="Type here" className="input input-bordered w-full " />
                            </div>

                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="text-lg lg:text-2xl">User Name</span>
                                </div>
                                <input type="text" value={targetedData?.userName} className="input input-bordered w-full " />
                            </div>

                            <div className="form-control w-full ">
                                <div className="label">
                                    <span className="text-lg lg:text-2xl">User Email</span>
                                </div>
                                <input type="text" value={targetedData?.userEmail} className="input input-bordered w-full " />
                            </div>
                        </div>

                        <div className="form-control mt-3">
                            <input type="submit" value="Update" className="card-common-button" />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="card-common-button w-full">
                                <p className="text-center">Close!</p>
                            </label>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default JobsFromUser;