const mongoose = require("mongoose");

const discussionsSchema = new mongoose.Schema(
  {
    title: { type: String, maxlength: 150, required: true },
    author: { type: [String], required: true, immutable: true },
    content: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = discussionsSchema;
