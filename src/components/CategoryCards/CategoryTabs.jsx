import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CategoryCards from './CategoryCards';


const CategoryTabs = () => {
    const [allJobData, setAllJobData] = useState([]);
    const [allJobCategory, setAllJobCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allCategoryJob')
            .then(res => {
                setAllJobData(res.data);

                // Extract unique categories
                const uniqueCategories = [...new Set(res.data.map(data => data.category))];
                setAllJobCategory(uniqueCategories);
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <div className='my-16'>
            <h2 className="text-2xl lg:text-5xl mb-6 border-[#FF4949] border-b-4 w-fit pb-2">Available Job Categories</h2>
            <p className="mb-10">Discover a diverse range of available job categories tailored to your skills and interests. Explore opportunities across various industries and find the perfect career path for your future.</p>
            <Tabs>
                <TabList>
                    <Tab>All Jobs</Tab>
                    {
                        allJobCategory?.map((data, idx) => <Tab key={idx}>{data}</Tab>)
                    }
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-evenly mt-2'>
                        {
                            allJobData?.map((data, idx) =>
                                <div key={idx} className="card border w-full bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <div className="h-full">
                                        <h2 className="card-title text-2xl">{data.name}</h2>
                                        <h3 className=""><span className="font-bold">Job Category:</span> {data.category}</h3>
                                        <h3 className=""><span className="font-bold">Job Title:</span> {data.jobTitle}</h3>
                                        <h3 className=""><span className="font-bold">Salary: </span>{data.salaryRange}</h3>
                                        <h3 className=""><span className="font-bold">Posted: </span>{data.jobPostingDate}</h3>
                                        <h3 className=""><span className="font-bold">Deadline: </span>{data.applicationDeadline}</h3>
                                        <h3 className=""><span className="font-bold">Job Applicants Number: </span>{data.jobApplicantsNumber}</h3>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <Link to={`/allCategory/${data._id}`} className="card-common-button">View Details</Link>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>

                </TabPanel>
                {
                    allJobCategory?.map((data, idx) => <TabPanel key={idx}>
                        <CategoryCards categoryName={data}></CategoryCards>
                    </TabPanel>)
                }
            </Tabs>
        </div>
    );
};

export default CategoryTabs;