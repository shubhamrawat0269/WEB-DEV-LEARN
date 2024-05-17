const router = require("express").Router();
const { createNewBlog } = require("../controllers/blogs.controller");

router.post("/new", createNewBlog);

module.exports = router;
