const router = require("express").Router();
const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
} = require("../controllers/blogs.controller");

router.get("/", getAllBlogs);
router.post("/new", createNewBlog);

router.delete("/:id", deleteBlogWithId);

module.exports = router;
