import React from "react";

const Pill = ({ title }) => {
  return (
    <span className="bg-black text-white py-[0.125rem] rounded-xl px-[1rem]">
      {title}
    </span>
  );
};

export default Pill;
