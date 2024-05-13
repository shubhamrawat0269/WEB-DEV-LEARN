import React, { useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircleSharp } from "react-icons/io5";

const CustomCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleClickNext = (value) => {
    if (imgIndex < 2) setImgIndex((preVal) => preVal + value);
  };

  const handleClickPrev = (value) => {
    if (imgIndex > 0) setImgIndex((preVal) => preVal + value);
  };

  return (
    <div className="m-[2rem] flex items-center justify-center">
      <button
        className="py-2 px-4"
        onClick={() => handleClickPrev(-1)}
        disabled={imgIndex == 0}
      >
        <IoArrowBackCircle size={40} color={imgIndex == 0 ? "gray" : "black"} />
      </button>
      <figure className="">
        <img
          className="h-[40rem]"
          src={`images/img-${imgIndex}.jpeg`}
          alt={`img-${imgIndex}`}
        />
      </figure>

      <button
        className="py-2 px-4 "
        onClick={() => handleClickNext(+1)}
        disabled={imgIndex > 2}
      >
        <IoArrowForwardCircleSharp
          size={40}
          color={imgIndex >= 2 ? "gray" : "black"}
        />
      </button>
    </div>
  );
};

export default CustomCarousel;
