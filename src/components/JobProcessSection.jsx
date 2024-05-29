import { IoPeopleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";




const JobProcessSection = () => {
    return (
        <div className="space-y-16 my-10">
            <div className="">
                <h2 className="text-2xl lg:text-5xl mb-6 border-[#FF4949] border-b-4 w-fit pb-2">Our Job <span className="text-[#FF4949]">Process</span></h2>
                <p className="">Job seekers love our platform for its user-friendly interface, extensive job listings, and personalized recommendations. Discover why thousands trust us to find their perfect career match every day.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    <div className="text-center p-10 space-y-3 border rounded-lg shadow-xl">
                        <IoPeopleOutline className="mx-auto text-3xl w-full" />
                        <h2 className="text-[#FF4949]">Create Account</h2>
                        <p className="">Join us today! Create your account to access exclusive offers and updates.</p>
                        <button className="card-common-button text-xs">Read More</button>
                    </div>
                    <div className="text-center p-10 space-y-3 border rounded-lg shadow-xl">
                        <CiSearch className="mx-auto text-3xl w-full" />
                        <h2 className="text-[#FF4949]">Search Job</h2>
                        <p className="">Find your next career move with our powerful Search Job feature.</p>
                        <button className="card-common-button text-xs">Read More</button>
                    </div>
                    <div className="text-center p-10 space-y-3 border rounded-lg shadow-xl">
                        <FaRegFileAlt className="mx-auto text-3xl w-full" />
                        <h2 className="text-[#FF4949]">Upload Resume</h2>
                        <p className="">Share your resume with us to unlock more job opportunities today!</p>
                        <button className="card-common-button text-xs">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobProcessSection;