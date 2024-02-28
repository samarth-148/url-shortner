/** @format */

const { getUser } = require("../service/auth.service");

async function authenticateUserByCookie(req, res, next) {
  const uid = req.cookies.uid;

  if (!uid) {
    return res.send(
      `<script>alert('Login required'); window.history.back();</script>`
    );
  }

  const user = getUser(uid);
  if (!user) {
    return res.send(
      `<script>alert('Login required'); window.history.back();</script>`
    );
  }
  next();
}

module.exports = {
  authenticateUserByCookie,
};
