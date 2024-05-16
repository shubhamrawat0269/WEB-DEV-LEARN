// import { getQueryErrors, getUsersInfo } from "../utils/index.js";
const { getQueryErrors, getUsersInfo } = require("../utils/index.js");

const getUsersData = (req, res) => {
  getUsersInfo().then((data) => res.json(data));
};

const getUsersDataById = (req, res) => {
  const { uuid } = req.params;

  getUsersInfo().then((data) => {
    let filteredObj = data.find((cur) => cur["login"]["uuid"] === uuid);
    res.json(filteredObj);
  });
};

const getUsersByGenderAndAge = (req, res) => {
  const { gender, age } = req.query;
  let filterData = [];

  getUsersInfo().then((data) => {
    // validation using joi
    // Note --> validation comes under your middleware. so, we can put validation in seperate file not here
    // const error = getQueryErrors({ age, gender });
    // if (error) {
    //   return res.status(422).json({ message: error["details"][0]["message"] });
    // }

    if (gender && age) {
      filterData = data.filter((cur) => cur["gender"] === gender);
      filterData = filterData.filter(
        (cur) => cur["dob"]["age"] === parseInt(age)
      );
    } else if (gender) {
      filterData = data.filter((cur) => cur["gender"] === gender);
    } else if (age) {
      filterData = data.filter((cur) => cur["dob"]["age"] === parseInt(age));
    } else {
      filterData = data;
    }
    return res.json(filterData);
  });
};

module.exports = { getUsersData, getUsersDataById, getUsersByGenderAndAge };
