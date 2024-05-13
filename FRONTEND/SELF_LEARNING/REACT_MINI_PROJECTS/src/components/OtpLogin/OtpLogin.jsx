import React, { useEffect, useRef, useState } from "react";

const OtpLogin = () => {
  const [inputList, setInputList] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (isNaN(value)) return;

    let updatedList = [...inputList];
    updatedList[index] = value;
    setInputList(updatedList);

    if (index < inputList.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.keyCode === 8) {
      // console.log(e.keyCode, index);

      let updatedInputList = [...inputList];
      updatedInputList[index] = "";
      setInputList(updatedInputList);

      // console.log({ index, updatedInputList });
      // console.log(inputRefs[index - 1]);

      if (index > 0) inputRefs[index - 1].current.focus();
    }
  };

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  return (
    <div className="bg-yellow-500 h-[93.5vh] grid place-content-center">
      <div className="bg-white w-[40rem] p-5">
        <h1 className="text-center my-3">Two-factor code input</h1>

        <div className="flex justify-center items-center gap-3">
          {inputList.map((cur, id) => {
            return (
              <input
                value={inputList[id]}
                key={id}
                ref={inputRefs[id]}
                type="text"
                maxLength="1"
                onChange={(e) => handleInputChange(e, id)}
                onKeyUp={(e) => handleKeyDown(e, id)}
                className="w-[5rem] h-[5rem] p-2 border-2 text-4xl outline-sky-900 text-center"
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-3 my-5">
          <button
            className="bg-orange-600 text-white py-2 px-4"
            // onClick={() => setTimerStart(true)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpLogin;
