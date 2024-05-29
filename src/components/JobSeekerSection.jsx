

const JobSeekerSection = () => {
    return (
        <div className="space-y-16 my-10">
            <div className="">
                <h2 className="text-2xl lg:text-5xl mb-6 border-[#FF4949] border-b-4 w-fit pb-2">What says Job Seeker <span className="text-[#FF4949]">About Us</span></h2>
                <p className="">Job seekers love our platform for its user-friendly interface, extensive job listings, and personalized recommendations. Discover why thousands trust us to find their perfect career match every day.</p>

            </div>
            <div className="relative">
                <img className="w-full" src="https://i.ibb.co/3knSM4J/world-map-png-35423.png" alt="" />
                <div className="avatar absolute top-10 left-20">
                    <div className="w-6 lg:w-24 rounded-full border-2 lg:border-[7px] border-white shadow-2xl">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" />
                    </div>
                </div>
                <div className="avatar absolute top-10 right-40">
                    <div className="w-6 lg:w-24 rounded-full border-2 lg:border-[7px] border-white shadow-2xl">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" />
                    </div>
                </div>
                <div className="avatar absolute bottom-1/2 right-1/2">
                    <div className="w-6 lg:w-24 rounded-full border-2 lg:border-[7px] border-white shadow-2xl">
                        <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="avatar" />
                    </div>
                </div>
                <div className="avatar absolute bottom-1/3 right-3/4">
                    <div className="w-6 lg:w-24 rounded-full border-2 lg:border-[7px] border-white shadow-2xl">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar" />
                    </div>
                </div>
                <div className="avatar absolute top-3/4 left-3/4">
                    <div className="w-6 lg:w-24 rounded-full border-2 lg:border-[7px] border-white shadow-2xl">
                        <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="avatar" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobSeekerSection;