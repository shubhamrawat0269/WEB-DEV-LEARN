const {
  getCurrenciesData,
  getCurrenciesBySymbol,
} = require("../controllers/currencies.controllers.js");

const router = require("express").Router();

router.get("/", getCurrenciesData);
router.get("/:symbol", getCurrenciesBySymbol);

module.exports = router;
