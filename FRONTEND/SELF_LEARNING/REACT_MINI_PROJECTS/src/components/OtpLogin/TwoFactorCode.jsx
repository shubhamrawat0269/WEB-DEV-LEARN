import React, { useEffect, useRef, useState } from "react";

const TwoFactorCode = () => {
  const [inputList, setInputList] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const handleInputChange = (e, id) => {
    const { value } = e.target;
    if (isNaN(value)) return;

    let updatedList = [...inputList];
    updatedList[id] = value;
    setInputList(updatedList);

    if (id < inputList.length - 1) inputRefs[id + 1].current.focus();
  };

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);
  return (
    <div className="bg-red-600 h-[100vh] grid place-content-center">
      <div className="bg-white w-[45rem] p-3">
        <h1 className="text-center">Two Factor Code Input</h1>
        {/* input four boxes here  */}
        <div className="flex justify-center items-center gap-4 my-4">
          {inputList.map((_, id) => {
            return (
              <input
                type="text"
                value={inputList[id]}
                ref={inputRefs[id]}
                onChange={(e) => handleInputChange(e, id)}
                maxLength={1}
                className="border-2 w-[6rem] h-[6rem] text-5xl text-center"
              />
            );
          })}
        </div>
        {/* button  */}
        <div className="text-center my-5">
          <button className="bg-orange-700 text-white p-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorCode;
