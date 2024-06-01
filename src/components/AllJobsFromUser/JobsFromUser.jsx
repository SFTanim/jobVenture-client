import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";



const JobsFromUser = () => {
    const [myPosts, setMyPosts] = useState();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/allPostsData/${user.email}`)
            .then(res => setMyPosts(res.data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl lg:text-5xl mx-auto w-fit border-[#FF4949] border-b-4 mb-8">My Jobs Post</h2>
            <div className="border">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-xl text-center">
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

                                            <h2 className=""><span className="font-bold">Job Title: </span>{post.jobTitle}</h2>
                                            <h2 className=""><span className="font-bold">Job Category: </span>{post.jobCategory}</h2>
                                            <h2 className=""><span className="font-bold">Job Description: </span>{post.jobDescription}</h2>
                                            <h2 className=""><span className="font-bold">Posting Date: </span>{post.postingDate}</h2>
                                            <h2 className=""><span className="font-bold">Application Deadline: </span>{post.ApplicationDeadLine}</h2>
                                        </td>
                                        <td className="text-3xl "><div className="mx-auto w-fit common-button"><RxUpdate /></div></td>
                                        <td className="text-3xl "><div className="mx-auto w-fit common-button"><RiDeleteBin5Line /></div></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default JobsFromUser;