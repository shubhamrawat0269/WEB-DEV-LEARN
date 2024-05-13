import React from "react";

const CurrencyComp = ({ title, currency, currencies, setCurrency }) => {
  return (
    <div>
      <label htmlFor="from" className="flex flex-col gap-1">
        <span id={title}>{title}</span>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          name="currency"
          id="currency"
        >
          {Object.keys(currencies).map((currency) => {
            return (
              <option key={currencies[currency]} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default CurrencyComp;
