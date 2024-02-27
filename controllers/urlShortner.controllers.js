/** @format */

const urlData = require("../models/urlShortner.models");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 10 });

async function handleGenerateShortId(req, res) {
  let id = uid.rnd();
  let body = req.body;
  if (!body.url) {
    return res.status(400).json({ msg: "url required" });
  }

  let isUrlExist = await urlData.findOne({ redirectUrl: body.url });
  if (isUrlExist) {
    return res.render("home", {
      id: isUrlExist.shortId,
    });
  }

  await urlData.create({
    shortId: id,
    redirectUrl: body.url,
    visitHistory: [],
  });
  res.render("home", {
    id,
  });
}

async function handleGetReq(req, res) {
  const id = req.params.id;
  const entry = await urlData.findOneAndUpdate(
    {
      shortId: id,
    },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  if (!entry) {
    return res.status(404).json({ msg: "URL not found" });
  }

  res.redirect(entry.redirectUrl);
}

module.exports = { handleGenerateShortId, handleGetReq };
