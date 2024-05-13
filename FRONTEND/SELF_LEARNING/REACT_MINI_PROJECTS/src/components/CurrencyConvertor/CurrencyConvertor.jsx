import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaRev } from "react-icons/fa";
import CurrencyComp from "./CurrencyComp";
const endpoint = `https://api.frankfurter.app`;

const CurrencyConvertor = () => {
  const [currencyData, setCurrencyData] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  // `https://api.frankfurter.app/currencies`
  // `https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD`

  //   For Ref
  //   {
  //   "amount": 10.0,
  //   "base": "GBP",
  //   "date": "2024-04-05",
  //   "rates": {
  //     "USD": 12.6392
  //   }
  // }

  async function getCurrencyData() {
    const res = await axios.get(`${endpoint}/currencies`);

    if (res.status == 200) {
      setCurrencyData(res.data);
    }
  }

  async function convertToDifferentCurrency(fromCurrency, toCurrency, amount) {
    const res = await axios.get(
      `${endpoint}/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
    );

    // console.log(res);
    setResult(res.data.rates);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log({ fromCurrency, toCurrency, amount });
    convertToDifferentCurrency(fromCurrency, toCurrency, amount);
  };

  useEffect(() => {
    getCurrencyData();
  }, []);

  return (
    <div className="bg-green-500 w-screen h-screen grid place-content-center">
      <div className="bg-white w-96 p-5">
        <h2 className="text-3xl text-center mt-2 mb-2">Currency Convertor</h2>

        <form onSubmit={onSubmit}>
          <div className="flex items-center justify-between">
            <CurrencyComp
              title="From:"
              currency={fromCurrency}
              setCurrency={setFromCurrency}
              currencies={currencyData}
            />
            <span>
              <FaRev />
            </span>
            <CurrencyComp
              title="To:"
              currency={toCurrency}
              setCurrency={setToCurrency}
              currencies={currencyData}
            />
          </div>

          <div className="mt-2 mb-2">
            <label htmlFor="number" className="flex flex-col gap-1">
              <span>Amount</span>
              <input
                type="number"
                value={amount}
                className="bg-transparent outline-none border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn text-white">
              Convert
            </button>
          </div>
        </form>
        {result &&
          Object.keys(result).map((curr) => {
            return (
              <h3 key={curr} className="mt-2 text-center">
                Converted Amount is :{" "}
                <span className="text-green-500">{result[curr]}</span>
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default CurrencyConvertor;
