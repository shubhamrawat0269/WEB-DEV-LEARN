import React from "react";
import JobList from "./JobList";
import { JobPostProvider } from "../../contexts/JobPostContexts";

const JobBoardBulleting = () => {
  return (
    <JobPostProvider>
      <div className="bg-orange-500 dark:bg-neutral-900">
        <h1 className="text-orange-200 dark:text-neutral-100 mx-2 py-2 text-center">
          Hacker News Jobs Board
        </h1>
        <JobList />
      </div>
    </JobPostProvider>
  );
};

export default JobBoardBulleting;
