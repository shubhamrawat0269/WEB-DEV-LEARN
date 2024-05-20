const mongoose = require("mongoose");
const discussionSchema = require("../schema/discussions.schema.js");

const discussionsModel = mongoose.model("Discussions", discussionSchema);

module.exports = discussionsModel;
