const userSchema = require("../schema/schema.js");

const userSearchValidator = (req, res, next) => {
  const result = userSchema.validate(req.query);
  if (result.error) {
    return res
      .status(422)
      .json({ message: result.error["details"][0]["message"] });
  }
  next();
};

module.exports = userSearchValidator;
