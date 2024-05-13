import axios from "axios";
import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(6);
  // API KEY --> https://jsonplaceholder.typicode.com/albums
  // for ref   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "quidem molestiae enim"
  //   },

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/albums`
      );
      //   console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const handleInfiniteScroll = async () => {
    // logic of scroll infinite here
    // we need scrollHeight/innnerHeight/scrollTop

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLimit((pre) => pre + 6);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();

    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  //   error handle
  if (error.length > 0) {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-red-800 text-white p-4 rounded-xl text-center">
          Error :{error}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full my-[2rem]">
        {data.slice(0, limit).map((cur) => {
          return (
            <div className="bg-orange-500 text-orange-100 w-4/6 m-auto p-3 mb-[0.5rem]">
              <p className="text-4xl bg-red-500 w-[5rem] p-2 text-center">
                {cur.id}
              </p>
              <h2 className="my-[1.5rem] text-2xl">{cur.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteScroll;
