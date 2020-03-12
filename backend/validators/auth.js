const { check } = require("express-validator");

exports.userSignUpValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is Required"),
  check("email")
    .isEmail()
    .withMessage("Email must be Valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
];

exports.userSignInValidator = [
  check("email")
    .isEmail()
    .withMessage("Email must be Valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
];
