const Users = require("../models/users.model.js");

const getAllUser = async (req, res) => {
  try {
    const userData = await Users.find({});
    return res.json(userData);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed to get User Data" });
  }
};

const createNewUser = async (req, res) => {
  try {
    await Users.create(req.body);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(409).json({
      message: "Failed to create new user",
      reason: "Already Exists in DB",
    });
  }
};

const getUserWithUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ username });

    return res.json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Couldn't find the username. Plz try again" });
  }
};

module.exports = { createNewUser, getAllUser, getUserWithUsername };
