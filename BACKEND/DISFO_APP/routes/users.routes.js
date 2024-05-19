const router = require("express").Router();
const {
  createNewUser,
  getAllUser,
  getUserWithUsername,
} = require("../controllers/users.controllers.js");

const verifyAuth = require("../middlewares/verifyAuth.js");

router.get("/all", verifyAuth, getAllUser);
router.get("/:username", getUserWithUsername);

router.post("/register", createNewUser);

module.exports = router;
