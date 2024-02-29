/** @format */

const { getUserId } = require("../service/auth.service");

async function authenticateUserByCookie(req, res, next) {
  const token = req.cookies.uid;

  if (!token) {
    return res.send(
      `<script>alert('Login required'); window.history.back();</script>`
    );
  }

  const userId = getUserId(token);
  if (!userId) {
    return res.send(
      `<script>alert('Login required'); window.history.back();</script>`
    );
  }
  next();
}

module.exports = {
  authenticateUserByCookie,
};
