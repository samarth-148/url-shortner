/** @format */

const express = require("express");
const router = express.Router();
const urlData = require("../models/urlShortner.models");

router.route("/").get(async (req, res) => {
  const urls = await urlData.find({});
  res.render("home", {
    urls,
  });
});

module.exports = router;
