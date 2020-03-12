const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin
} = require("../controllers/auth");

const {
  userSignUpValidator,
  userSignInValidator
} = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/signup", userSignUpValidator, runValidation, signup);
router.post("/signin", userSignInValidator, runValidation, signin);
router.get("/signout", signout);

//test
router.get("/secret", requireSignin, (req, res) => {
  res.json({
    message: "You have Access"
  });
});

module.exports = router;
