const Blogs = require("../models/blogs.models");

const createNewBlog = async (req, res) => {
  try {
    const newBlogDoc = await Blogs.create(req.body);
    // console.log(newBlogDoc);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "duplicate title is strictly prohibited" });
  }
};

module.exports = { createNewBlog };
