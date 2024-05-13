import { useEffect } from "react";
import { createContext, useState } from "react";
import { jobPostEndpoint } from "../utils";

const JobPostContexts = createContext();

const JobPostProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);
  const [limit, setLimit] = useState(6);

  const handleJobList = async () => {
    try {
      let res = await fetch(`${jobPostEndpoint}/jobstories.json`);
      let jobIds = await res.json();

      // console.log(jobIds);
      let jobIdsDetail = [...jobIds];

      const jobData = await Promise.all(
        jobIdsDetail.map(async (jobId) => {
          const res = await fetch(`${jobPostEndpoint}/item/${jobId}.json`);
          const resInJSON = await res.json();
          return resInJSON;
        })
      );
      // console.log(jobData);
      setJobsData(jobData);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleSetPage = () => {
    setLimit(limit + 6);
  };

  useEffect(() => {
    handleJobList();
  }, []);

  const context = { jobsData, limit, handleSetPage };

  return (
    <JobPostContexts.Provider value={context}>
      {children}
    </JobPostContexts.Provider>
  );
};

export { JobPostProvider, JobPostContexts };
