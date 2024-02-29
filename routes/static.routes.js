/** @format */

const express = require("express");
const router = express.Router();
const urlData = require("../models/urlShortner.models");
const { getUserId } = require("../service/auth.service");

router.route("/").get(async (req, res) => {
  const uid = req.cookies.uid;
  const userId = getUserId(uid);
  let loggedIn = false;
  let urls;

  if (userId) {
    console.log("dcnd");
    urls = await urlData.find({ createdBy: userId });
    loggedIn = true;
  }

  res.render("home", {
    urls,
    loggedIn,
  });
});

router.route("/signup").get((req, res) => {
  res.render("signup");
});

router.route("/login").get((req, res) => {
  res.render("login");
});
module.exports = router;
