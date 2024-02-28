/** @format */
const User = require("../models/user.models");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 16 });
const { setUser } = require("../service/auth.service");

async function handleSignUp(req, res) {
  const { firstName, lastName, password, email } = req.body;

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  const sessionID = uid.rnd();
  setUser(sessionID, user);
  res.cookie("uid", sessionID);

  return res.redirect("/");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.redirect("/login");
  }
  const sessionID = uid.rnd();
  setUser(sessionID, user);
  res.cookie("uid", sessionID);
  return res.redirect("/");
}

module.exports = { handleSignUp, handleLogin };
