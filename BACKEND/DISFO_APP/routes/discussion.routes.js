const router = require("express").Router();
const {
  getAllDiscussion,
  createNewDiscussions,
} = require("../controllers/discussion.controllers.js");

router.post("/new", createNewDiscussions);

module.exports = router;
