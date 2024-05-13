import React, { useContext } from "react";
import { JobPostContexts } from "../../contexts/JobPostContexts";

const JobList = () => {
  const { jobsData, limit, handleSetPage } = useContext(JobPostContexts);
  // For Ref
  // {
  //   by: "romming";
  //   id: 40006758;
  //   score: 1;
  //   time: 1712869253;
  //   title: "Etleap (YC W13) is hiring an account executive in San Francisco";
  //   type: "job";
  //   url: "https://etleap.";
  // }

  return (
    <div>
      {jobsData.length > 1 ? (
        <div className="pb-5">
          <div className="flex flex-col gap-2 mt-5">
            {jobsData.slice(0, limit).map((job) => {
              return (
                <div
                  key={job.id}
                  className="bg-orange-200 dark:bg-neutral-300 px-3 py-2 w-5/6 md:w-3/6 m-auto rounded-md"
                >
                  <a href={job.url} target="_blank">
                    <h2 className="text-2xl font-bold dark:text-neutral-700">
                      {job.title}
                    </h2>
                  </a>
                  <div className="flex items-center gap-2 text-orange-600 dark:text-neutral-800 font-bold my-2 pl-1">
                    <span className="text-sm">By {job.by}</span>
                    <span className="text-sm">
                      {new Date(job.time).toLocaleTimeString()}
                    </span>
                    <span className="text-sm">
                      {new Date(job.time).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={
              limit == jobsData.length
                ? "hidden"
                : "flex items-center justify-center"
            }
          >
            <button
              onClick={handleSetPage}
              className="bg-orange-200 dark:bg-neutral-500 dark:text-white py-2 px-4 rounded-lg my-4 hover:bg-orange-800 hover:dark:bg-neutral-950 hover:text-white"
            >
              Load More Jobs
            </button>
          </div>
        </div>
      ) : (
        <h2 className="text-3xl font-bold text-center">Loading ....</h2>
      )}
    </div>
  );
};

export default JobList;
