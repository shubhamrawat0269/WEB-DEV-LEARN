const {
  getUsersData,
  getUsersDataById,
  getUsersByGenderAndAge,
} = require("../controllers/users.controllers.js");

const userSearchValidator = require("../middlewares/userSearch.validation.js");

const router = require("express").Router();

router.get("/", getUsersData);
router.get("/search", userSearchValidator, getUsersByGenderAndAge);
router.get("/:uuid", getUsersDataById);

module.exports = router;
