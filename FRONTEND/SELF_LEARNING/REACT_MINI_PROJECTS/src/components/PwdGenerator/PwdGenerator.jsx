import React, { useState } from "react";
import { checkboxItemList } from "../../utils";
import usePasswordGenerator from "../../hooks/usePasswordGenerator";

const PwdGenerator = () => {
  const [checkBoxData, setCheckBoxData] = useState(checkboxItemList);
  const [charLen, setCharLen] = useState(10);

  const { password, pwdGenerator, copyPassword } = usePasswordGenerator();

  const handleCheckboxChange = (id) => {
    const updatedCheckbox = [...checkBoxData];
    updatedCheckbox[id].status = !updatedCheckbox[id].status;
    setCheckBoxData(updatedCheckbox);
  };

  return (
    <div className="bg-green-900 m-5 p-10 w-3/5 text-white">
      {password.length > 0 && (
        <div className="flex__prop  mt-3 mb-3">
          <h3>{password}</h3>
          <button className="btn" onClick={() => copyPassword(password)}>
            Copy
          </button>
        </div>
      )}
      <div className="flex__prop  mt-3 mb-3">
        <h3>Character Length</h3>
        <h2>{charLen}</h2>
      </div>
      <div>
        <input
          type="range"
          name="rangeBox"
          className="slider"
          min={6}
          max={16}
          value={charLen}
          onChange={(e) => setCharLen(e.target.value)}
        />
      </div>

      <div className="grid grid__col__two mt-3 mb-3">
        {checkBoxData.map((cur, id) => {
          return (
            <label htmlFor={cur.title} key={id} className="flex gap-3">
              <input
                type="checkbox"
                name="checkbox"
                id={cur.title}
                checked={cur.status}
                onChange={() => handleCheckboxChange(id)}
              />
              <span>{cur.title}</span>
            </label>
          );
        })}
      </div>

      <div className="mt-5">
        <button
          className="btn"
          onClick={() => pwdGenerator(checkBoxData, charLen)}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PwdGenerator;
