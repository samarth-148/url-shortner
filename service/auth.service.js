/** @format */
const jwt = require("jsonwebtoken");
const secretKey = "SmaP1427$2024";

function setUser(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    secretKey
  );
}

function getUserId(token) {
  if (!token) {
    return null;
  }
  const decodedToken = jwt.verify(token, secretKey);
  return decodedToken.id;
}

module.exports = {
  setUser,
  getUserId,
};
