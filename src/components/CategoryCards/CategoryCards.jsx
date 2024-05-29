import { useEffect, useState, } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const CategoryCards = ({ categoryName }) => {
    const [categories, setCategories] = useState();
    const axiosSecure = useAxiosSecure();
    const url = `/allCategoryJob/${categoryName}`;
    // console.log(categoryName);

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setCategories(res.data))
    }, [axiosSecure, url])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                categories?.map((data, idx) =>
                    <div key={idx} className="card border bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{data.name}</h2>
                            <h3 className=""><span className="font-bold">Job Title:</span> {data.category}</h3>
                            <h3 className=""><span className="font-bold">Job Title:</span> {data.jobTitle}</h3>
                            <h3 className=""><span className="font-bold">Salary: </span>{data.salaryRange}</h3>
                            <h3 className=""><span className="font-bold">Posted: </span>{data.jobPostingDate}</h3>
                            <h3 className=""><span className="font-bold">Deadline: </span>{data.applicationDeadline}</h3>
                            <h3 className=""><span className="font-bold">Job Applicants Number: </span>{data.jobApplicantsNumber}</h3>
                            <div className="card-actions justify-end">
                                <Link to={`/cardDetails/${data._id}`} className="card-common-button">View Details</Link>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

CategoryCards.propTypes = {
    categoryName: PropTypes.string
}
export default CategoryCards;