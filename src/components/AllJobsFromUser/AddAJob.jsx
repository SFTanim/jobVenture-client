import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const AddAJob = () => {
    const { user } = useContext(AuthContext);
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;

    return (
        <div className="mx-auto p-10">
            <h2 className="text-2xl lg:text-5xl mx-auto w-fit border-[#FF4949] border-b-4 mb-8">Add A New Job Post</h2>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="form-control w-full ">
                    <div className="label">
                        <span className="text-lg lg:text-2xl">Job Title</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full ">
                    <div className="label">
                        <span className="text-lg lg:text-2xl">Job Posting Date</span>
                    </div>
                    <input type="text" value={currentDate} className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full ">
                    <div className="label">
                        <span className="text-lg lg:text-2xl">Application Deadline</span>
                    </div>
                    <input type="date" className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full ">
                    <div className="label">
                        <span className="text-lg lg:text-2xl">Job Descriptiion</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full ">
                    <div className="label">
                        <span className="text-lg lg:text-2xl">Salary Range</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
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
                <div className="form-control w-full  col-span-2">
                    <input type="submit" value="Submit" className="card-common-button" />
                </div>
            </form>
        </div>
    );
};

export default AddAJob;