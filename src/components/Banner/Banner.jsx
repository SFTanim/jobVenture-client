import BannerSlider from "./BannerSlider";


const Banner = () => {

    return (
        <div className="flex flex-col lg:flex-row">
            {/* Left Side of the Banner*/}
            <div className="flex-1 flex flex-col justify-center space-y-4 lg:space-y-10 my-10">
                <div className="space-y-3">
                    <h1 className="text-3xl lg:text-5xl">Find Your Favourite</h1>
                    <h2 className="text-3xl lg:text-5xl text-[#FF4949]">Job Immediete</h2>
                </div>
                <p className="">Discover your dream job instantly. Explore countless opportunities and secure your favorite position today with just a click. Start your career journey and achieve success.</p>
            </div>

            {/* Right Side of the Banner */}
            <div className="flex-1 carosel">
                <BannerSlider></BannerSlider>
            </div>
        </div>
    );
};

export default Banner;