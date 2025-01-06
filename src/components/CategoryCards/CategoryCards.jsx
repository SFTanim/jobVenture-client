import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CategoryCards = ({ categoryName }) => {
  const axiosPublic = useAxiosPublic();
  const url = `/allCategoryJob/${categoryName}`;

  const {
    isLoading,
    error,
    data: categories = [],
  } = useQuery({
    queryKey: ["jobs", categoryName], // Added categoryName as part of queryKey for uniqueness
    queryFn: async () => {
      const res = await axiosPublic.get(url);
      return res.data;
    },
  });

  return (
    <div>
      {isLoading ? (
        // Loading Skeleton
        <div className="flex flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : error ? (
        // Error Alert
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      ) : (
        // Category Cards
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories?.map((data, idx) => (
            <div key={idx} className="card border bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl">{data?.userName}</h2>
                <h3>
                  <span className="font-bold">Job Category:</span>{" "}
                  {data?.jobCategory}
                </h3>
                <h3>
                  <span className="font-bold">Job Title:</span> {data?.jobTitle}
                </h3>
                <h3>
                  <span className="font-bold">Salary: </span>
                  {data?.salaryRange}
                </h3>
                <h3>
                  <span className="font-bold">Posted: </span>
                  {data?.postingDate}
                </h3>
                <h3>
                  <span className="font-bold">Deadline: </span>
                  {data?.ApplicationDeadLine}
                </h3>
                <h3>
                  <span className="font-bold">Job Applicants Number: </span>
                  {data?.applicantNumber}
                </h3>
                <div className="card-actions justify-end">
                  <Link
                    to={`/allCategory/${data._id}`}
                    className="card-common-button"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CategoryCards.propTypes = {
  categoryName: PropTypes.string.isRequired, // Added `isRequired` for better type safety
};

export default CategoryCards;
