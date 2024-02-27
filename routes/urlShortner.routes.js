/** @format */

const express = require("express");
const router = express.Router();

const {
  handleGenerateShortId,
  handleGetReq,
} = require("../controllers/urlShortner.controllers");

router.route("/").post(handleGenerateShortId);
router.route("/:id").get(handleGetReq);

module.exports = router;
