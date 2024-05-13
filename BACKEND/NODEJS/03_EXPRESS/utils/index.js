let axios = require("axios");
let schema = require("../schema/schema.js");

const getUsersInfo = async () => {
  try {
    const res = await axios.get(
      "https:gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json"
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getCurrencies = async () => {
  try {
    const res = await axios.get("https://api.coinbase.com/v2/currencies");
    // console.log(res);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// const getQueryErrors = (data) => {
//   const result = schema.validate(data);
//   return result.error;
// };

module.exports = { getUsersInfo, getCurrencies };
