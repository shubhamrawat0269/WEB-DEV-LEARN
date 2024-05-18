const Blogs = require("../models/blogs.models");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    // console.log(blogs);
    return res.json(blogs);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to get Blog Data" });
  }
};

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

const updateBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const update = req.body;
    const result = await Blogs.findOneAndUpdate(filter, update, { new: true });

    return res.json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Couldn't update blog post. Plz try again" });
  }
};

const deleteBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blogs.findOneAndDelete({ _id: id });

    return res.json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Couldn't delte blog post. Plz try again" });
  }
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
};
