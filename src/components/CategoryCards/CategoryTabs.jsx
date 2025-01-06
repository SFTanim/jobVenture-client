import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import CategoryCards from "./CategoryCards";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CategoryTabs = () => {
  const axiosPublic = useAxiosPublic();

  const {
    isPending,
    error,
    data: allJobData,
  } = useQuery({
    queryKey: ["allJobs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allCategoryJob");
      return res.data;
    },
  });

  const allJobCategory = [
    ...new Set(allJobData?.map((data) => data?.jobCategory)),
  ];

  return (
    <div className="my-16">
      <h2 className="text-2xl lg:text-5xl mb-6 border-[#FF4949] border-b-4 w-fit pb-2">
        Available Job Categories
      </h2>
      <p className="mb-10">
        Discover a diverse range of available job categories tailored to your
        skills and interests. Explore opportunities across various industries
        and find the perfect career path for your future.
      </p>
      <Tabs>
        <TabList>
          <Tab>All Jobs</Tab>
          {allJobCategory?.map((data, idx) => (
            <Tab key={idx}>{data}</Tab>
          ))}
        </TabList>

        <TabPanel>
          {isPending ? (
            <div className="flex flex-col  gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ) : error ? (
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-evenly mt-2">
              {allJobData?.map((data, idx) => (
                <div
                  key={idx}
                  className="card border w-full bg-base-100 shadow-xl"
                >
                  <div className="card-body">
                    <div className="h-full">
                      <h2 className="card-title text-2xl">{data?.userName}</h2>
                      <h3 className="">
                        <span className="font-bold">Job Category:</span>{" "}
                        {data?.jobCategory}
                      </h3>
                      <h3 className="">
                        <span className="font-bold">Job Title:</span>{" "}
                        {data?.jobTitle}
                      </h3>
                      <h3 className="">
                        <span className="font-bold">Salary: </span>
                        {data?.salaryRange}
                      </h3>
                      <h3 className="">
                        <span className="font-bold">Posted: </span>
                        {data?.postingDate}
                      </h3>
                      <h3 className="">
                        <span className="font-bold">Deadline: </span>
                        {data?.ApplicationDeadLine}
                      </h3>
                      <h3 className="">
                        <span className="font-bold">
                          Job Applicants Number:{" "}
                        </span>
                        {data?.applicantNumber}
                      </h3>
                    </div>
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
        </TabPanel>
        {allJobCategory?.map((data, idx) => (
          <TabPanel key={idx}>
            <CategoryCards categoryName={data}></CategoryCards>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
