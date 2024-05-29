const mongoose = require("mongoose");

/*  nested schema   */
const authorSchema = new mongoose.Schema({
  fullName: { type: String, maxlength: 25 },
  twitterHandle: { type: String },
  email: { type: String, required: true, maxlength: 50 },
  image: { type: String },
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: [authorSchema],
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = blogSchema;
