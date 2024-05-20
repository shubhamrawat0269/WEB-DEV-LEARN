const Discussions = require("../models/discussions.model.js");

const getAllDiscussion = async (req, res) => {
  try {
    const discussionData = await Discussions.find({});
    return res.json(discussionData);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to get Discussion Data" });
  }
};

const createNewDiscussions = async (req, res) => {
  try {
    await Discussions.create(req.body);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(409).json({
      message: "Failed to create new discussion blog",
      reason: "Already Exists in DB",
    });
  }
};

module.exports = { getAllDiscussion, createNewDiscussions };
