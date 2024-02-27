/** @format */
const mongoose = require("mongoose");

async function handleConnection(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

module.exports = {
  handleConnection,
};
