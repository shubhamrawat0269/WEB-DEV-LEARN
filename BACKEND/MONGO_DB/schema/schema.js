const joi = require("joi");

// Step --> 1. Create shema for joi , create validator function to validate ie. getQueryErrors

const schema = joi
  .object()
  .keys({
    age: joi.number().min(0).max(100),
    gender: joi.string().valid("male", "female"),
  })
  .or("age", "gender");

module.exports = schema;
