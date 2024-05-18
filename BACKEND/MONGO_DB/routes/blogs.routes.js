const router = require("express").Router();
const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
} = require("../controllers/blogs.controller");

router.get("/", getAllBlogs);
router.post("/new", createNewBlog);
router.patch("/:id", updateBlogWithId);
router.delete("/:id", deleteBlogWithId);

module.exports = router;
