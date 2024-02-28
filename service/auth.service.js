/** @format */

const userMap = new Map();

function setUser(id, user) {
  userMap.set(id, user);
}

function getUser(id) {
  return userMap.get(id);
}

module.exports = {
  setUser,
  getUser,
};
