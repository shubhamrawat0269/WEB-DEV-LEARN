// api-key :  https://hacker-news.firebaseio.com/v0/jobstories.json
// API : https://hacker-news.firebaseio.com/v0/item/${id}.json

import { useEffect, useState } from "react";
import JobTile from "./JobTile";
import axios from "axios";

const JobPortal = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // for Ref

  // by: "samuelklam";
  // id: 40960402;
  // score: 1;
  // time: 1720958435;
  // title: "PermitFlow (YC W22) Is Hiring";

  const getJobIds = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://hacker-news.firebaseio.com/v0/jobstories.json`
    );

    let jobIdsList = res.data;

    // use of Promise.all method

    let jobs = await Promise.all(
      jobIdsList.map(async (curJobId) => {
        let job = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${curJobId}.json`
        );
        // console.log(job?.data);
        return job?.data;
      })
    );

    // console.log(jobs);
    setData(jobs);
    setLoading(false);
  };

  //   console.log(data);

  useEffect(() => {
    getJobIds();
  }, []);

  return (
    <div className="flex flex-col gap-2 h-full">
      <h1 className="text-5xl font-bold text-red-200 text-center">HN JOBS</h1>
      <div>
        {loading ? (
          <h1 className="text-5xl text-center h-96 flex justify-center items-center">
            Loading ....
          </h1>
        ) : (
          <div className="grid grid-cols-4 gap-4 p-4 px-12 py-2">
            {data?.map((job) => {
              const { by, id, time, title } = job;
              return <JobTile author={by} id={id} time={time} title={title} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPortal;
