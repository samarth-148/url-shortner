/** @format */

const express = require("express");
const router = express.Router();
const urlData = require("../models/urlShortner.models");
const { getUser } = require("../service/auth.service");

router.route("/").get(async (req, res) => {
  const uid = req.cookies.uid;
  const user = getUser(uid);
  let urls;

  if (user) {
    urls = await urlData.find({ createdBy: user._id });
  }

  res.render("home", {
    urls,
  });
});

router.route("/signup").get((req, res) => {
  res.render("signup");
});

router.route("/login").get((req, res) => {
  res.render("login");
});
module.exports = router;
