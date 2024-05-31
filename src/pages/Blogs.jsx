


const Blogs = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 my-10">
            <div className="flex-1">
                <img className="w-full" src="https://i.ibb.co/g4gZ8Ws/88489-text-symbol-question-drawing-mark-free-download-png-hq.png" alt="" />
            </div>
            <div className="flex-1">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What is an access token and refresh token? How do they work and where should we store them on the client side?
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-bold">Access Token:</span> Short-lived credential for accessing resources.Lifespan is Minutes to hours.</p>
                        <p><span className="font-bold">Refresh Token:</span> Long-lived credential for obtaining new access tokens.Lifespan is Days to months.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is express js?
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-bold">Express.js</span> is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is Nest JS?
                    </div>
                    <div className="collapse-content">
                        <p><span className="font-bold">NestJS</span> is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and incorporates many concepts from Angular.</p>
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Code Explanation
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;