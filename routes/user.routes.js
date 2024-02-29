/** @format */

const express = require("express");
const router = express.Router();

const {
  handleSignUp,
  handleLogin,
  handleLogOut,
} = require("../controllers/user.controllers");

router.route("/signup").post(handleSignUp);
router.route("/login").post(handleLogin);
router.route("/logout").get(handleLogOut);

module.exports = router;
