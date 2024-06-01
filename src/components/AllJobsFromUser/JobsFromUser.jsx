import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { RiDeleteBin5Line } from "react-icons/ri";


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
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Job Category</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myPosts?.map((post, idx) =>
                                    <tr key={idx} className="hover">
                                        <td>{post.jobTitle}</td>
                                        <td>{post.jobCategory}</td>
                                        <td><RiDeleteBin5Line /></td>
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