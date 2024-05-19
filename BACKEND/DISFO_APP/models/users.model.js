const mongoose = require("mongoose");
const userSchema = require("../schema/users.schema.js");

const usersModel = mongoose.model("Users", userSchema);

module.exports = usersModel;
