/** @format */
const User = require("../models/user.models");
const { setUser } = require("../service/auth.service");

async function handleSignUp(req, res) {
  const { firstName, lastName, password, email } = req.body;

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  const token = setUser(user);
  res.cookie("uid", token);

  return res.redirect("/");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.send(
      `<script>alert('Wrong credentials! Please enter correct details.'); window.history.back();</script>`
    );
  }
  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}
async function handleLogOut(req, res) {
  res.clearCookie("uid");
  return res.redirect("/");
}
module.exports = { handleSignUp, handleLogin, handleLogOut };
