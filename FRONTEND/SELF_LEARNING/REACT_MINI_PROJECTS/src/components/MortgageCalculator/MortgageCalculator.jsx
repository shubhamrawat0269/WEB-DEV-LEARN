import React, { useState } from "react";

const MortgageCalculator = () => {
  const [calculatingValue, setCalculatingValue] = useState({
    principal: "",
    rate: "",
    years: "",
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCalculatingValue((pre) => {
      return {
        ...pre,
        [id]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { principal, rate, years } = calculatingValue;
    let monthlyInterestRate = rate / 12 / 100;
    let numberOfPayments = years * 12;
    let output =
      (principal *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setResult(Math.round(output));
  };

  //   console.log(calculatingValue);

  return (
    <div className="bg-yellow-500 h-[93.5vh] grid place-content-center">
      <div className="bg-white w-[40rem] p-5">
        <h1 className="text-center my-3">Mortgage Calculator</h1>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col justify-between items-center gap-3">
            <label
              htmlFor=""
              className="w-[25rem] flex justify-between items-center gap-5"
            >
              <span>Principal Amount</span>
              <input
                type="text"
                id="principal"
                value={calculatingValue.principal}
                onChange={(e) => handleInputChange(e)}
                className="w-[15rem] h-[3rem] p-1 border-2 text-1xl outline-none text-center"
                placeholder="Enter Loan Amount"
              />
            </label>
            <label
              htmlFor=""
              className="w-[25rem] flex justify-between items-center gap-5"
            >
              <span>Interest Rate</span>
              <input
                type="text"
                id="rate"
                value={`${calculatingValue.rate}`}
                onChange={(e) => handleInputChange(e)}
                className="w-[15rem] h-[3rem] p-1 border-2 text-1xl outline-none text-center"
                placeholder="Enter Rate of Interest"
              />
            </label>
            <label
              htmlFor=""
              className="w-[25rem] flex justify-between items-center gap-5"
            >
              <span>Length of Loan</span>
              <input
                type="text"
                id="years"
                value={calculatingValue.years}
                onChange={(e) => handleInputChange(e)}
                className="w-[15rem] h-[3rem] p-1 border-2 text-1xl outline-none text-center"
                placeholder="Enter Time Period"
              />
            </label>
          </div>
          <div className="flex justify-center items-center gap-3 my-5">
            <button
              type="submit"
              className="bg-yellow-600 text-white py-2 px-4"
            >
              Calculate
            </button>
          </div>
        </form>

        <div className="text-center my-2">
          <p className="text-orange-900 font-bold">
            Your monthly mortgage payment will be ${`${result}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
