const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  fullname: { type: String, maxLength: 50, default: "" },
  username: { type: String, required: true, maxLength: 25, unique: true },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [isEmail, "invalid email"],
  },
});

module.exports = userSchema;
