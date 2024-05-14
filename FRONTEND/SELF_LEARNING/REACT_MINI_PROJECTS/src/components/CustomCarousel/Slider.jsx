import React, { useState } from "react";

const data = [
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
  "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleClickPrev = (val) => {
    if (imgIndex > 0) setImgIndex((pre) => pre + val);
  };
  const handleClickNext = (val) => {
    if (imgIndex < data.length - 1) setImgIndex((pre) => pre + val);
  };

  return (
    <div>
      <button
        className="border bg-orange-400 text-white px-4 py-2 cursor-pointer"
        onClick={() => handleClickPrev(-1)}
      >
        Prev
      </button>
      <figure>
        <img src={data[imgIndex]} alt="1" />
      </figure>
      <button
        className="border bg-orange-400 text-white px-4 py-2 cursor-pointer"
        onClick={() => handleClickNext(+1)}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
