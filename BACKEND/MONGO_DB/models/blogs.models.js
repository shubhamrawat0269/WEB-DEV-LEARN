const mongoose = require("mongoose");
const blogSchema = require("../schema/blogs.schema");

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;
