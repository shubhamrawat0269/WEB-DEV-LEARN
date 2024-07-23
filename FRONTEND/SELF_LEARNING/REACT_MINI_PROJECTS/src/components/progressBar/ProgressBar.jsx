import { useEffect, useState } from "react";

const Cell = ({ width, pileColor }) => {
  return (
    <div className="relative">
      <div className="w-96 h-8 bg-white flex justify-center items-center rounded-md">
        <span
          className={width > 50 ? "relative z-10 text-white" : "relative z-10"}
        >
          {width}%
        </span>
      </div>

      <div
        style={{ width: `${width}%`, backgroundColor: pileColor }}
        className="h-8 rounded-md absolute top-0 left-0"
      />
    </div>
  );
};

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let timerId = setTimeout(() => {
      if (width >= 100) clearTimeout(timerId);
      else setWidth((pre) => pre + 1);
    }, 100);

    return () => clearTimeout(timerId);
  }, [width]);

  return (
    <div className="grid gap-4 place-content-center w-screen h-screen">
      <Cell width={width} pileColor="red" />
      <Cell width={width} pileColor="aqua" />
      <Cell width={width} pileColor="brown" />
    </div>
  );
};

export default ProgressBar;
