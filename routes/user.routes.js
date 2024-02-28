/** @format */

const express = require("express");
const router = express.Router();

const {
  handleSignUp,
  handleLogin,
} = require("../controllers/user.controllers");

router.route("/signup").post(handleSignUp);
router.route("/login").post(handleLogin);

module.exports = router;
