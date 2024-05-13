import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Bar = ({ value }) => {
  return (
    <div
      className="bg-green-600 h-8 rounded-xl absolute left-0"
      style={{ width: `${value}%` }}
    />
  );
};

const ProgressPipe = ({ value }) => {
  return (
    <div className="bg-yellow-400 w-5/6 h-8 m-auto rounded-xl grid place-content-center relative">
      <span className={value > 50 ? "z-10 text-white" : "z-10"}>{value}%</span>
      <Bar value={value} />
    </div>
  );
};

// main progress bar component
const ProgressBar = () => {
  const [value, setValue] = useState(0);
  const timerRef = useRef(null);

  const startProgressBar = () => {
    if (value >= 100) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setValue((preVal) => preVal + 1);
    }, 100);
  };

  useEffect(() => {
    startProgressBar();

    return () => clearInterval(timerRef.current);
  }, [value]);

  return (
    <div className="bg-orange-900 w-full h-full">
      <div className="w-5/6 md:w-3/6 m-auto h-full flex items-center justify-center">
        <ProgressPipe value={value} />
      </div>
    </div>
  );
};

export default ProgressBar;
