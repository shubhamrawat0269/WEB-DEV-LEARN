import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./InfiniteScroll.module.css";

const API_URL = `https://jsonplaceholder.typicode.com/photos`;

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(18);

  const getData = async () => {
    try {
      const res = await axios.get(API_URL);
      //   console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleWindowSize = () => {
    // console.log(window.innerHeight);
    // console.log(document.documentElement.scrollHeight);
    // console.log(document.documentElement.scrollTop);

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLimit(limit + 18);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowSize);

    return () => window.removeEventListener("scroll", handleWindowSize);
  }, [limit]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-6 gap-2">
        {data?.slice(0, limit)?.map((cur) => {
          return (
            <figure key={cur?.id}>
              <img className="w-60" src={`${cur?.url}`} alt={cur?.id} />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteScroll;
