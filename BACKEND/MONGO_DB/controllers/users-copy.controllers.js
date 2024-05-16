import { getUsersInfo } from "../utils/index.js";

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
  const allowedGender = ["male", "female"];
  getUsersInfo().then((data) => {
    if (gender && age) {
      /* gender validation */

      if (!allowedGender.includes(gender)) {
        return res.status(422).json({
          message: "Gender must be male or female",
        });
      }
      filterData = data.filter((cur) => cur["gender"] === gender);
      /* age validation 1 */

      if (isNaN(parseInt(age))) {
        return res
          .status(422)
          .json({ message: "Age Parameter should be a number" });
      }
      /* age validation 2 */
      if (parseInt(age) < 0 || parseInt(age) > 100) {
        return res.status(422).json({
          message: "Age out of bounds. It should be a number b/w 0 and 100",
        });
      }
      filterData = filterData.filter(
        (cur) => cur["dob"]["age"] === parseInt(age)
      );
    } else if (gender) {
      if (!allowedGender.includes(gender)) {
        return res.status(422).json({
          message: "Gender must be male or female",
        });
      }
      filterData = data.filter((cur) => cur["gender"] === gender);
    } else if (age) {
      /* age validation 1 */

      if (isNaN(parseInt(age))) {
        return res
          .status(422)
          .json({ message: "Age Parameter should be a number" });
      }
      /* age validation 2 */
      if (parseInt(age) < 0 || parseInt(age) > 100) {
        return res.status(422).json({
          message: "Age out of bounds. It should be a number b/w 0 and 100",
        });
      }
      filterData = data.filter((cur) => cur["dob"]["age"] === parseInt(age));
    } else {
      filterData = data;
    }
    return res.json(filterData);
  });
};

export { getUsersData, getUsersDataById, getUsersByGenderAndAge };
