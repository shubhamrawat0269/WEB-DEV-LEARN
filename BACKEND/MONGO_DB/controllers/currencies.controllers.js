const { getCurrencies } = require("../utils/index.js");
// const pwd = "myNameisKhanAndIamaTerrorist";

const getCurrenciesData = (req, res) => {
  const { min_value } = req.query;
  // if (req.headers.authorization !== pwd) {
  //   return res.status(403).json({ message: "Unauthorized Access!!!!" });
  // }

  getCurrencies().then((data) => {
    let currenciesByMinSize = data.filter(
      (curr) => curr["min_size"] == min_value
    );

    currenciesByMinSize.length > 0
      ? res.status(200).json(currenciesByMinSize)
      : res.status(200).json(data);
  });
};

const getCurrenciesBySymbol = (req, res) => {
  // console.log(req.params);
  const { symbol } = req.params;

  getCurrencies().then((data) => {
    let filterCurrencyData = data.find(
      (cur) => cur.id === symbol.toUpperCase()
    );

    // error handle
    filterCurrencyData
      ? res.json(filterCurrencyData)
      : res.status(404).json({ message: "Invalid Currency" });
  });
};

module.exports = { getCurrenciesData, getCurrenciesBySymbol };
