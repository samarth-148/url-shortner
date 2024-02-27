/** @format */

const express = require("express");
const app = express();
const path = require("path");
const { handleConnection } = require("./connection");
const urlRouter = require("./routes/urlShortner.routes");
const staticRouter = require("./routes/static.routes");

app.use(express.json());
app.use(express.urlencoded());

handleConnection("mongodb://127.0.0.1:27017/urlShortner")
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(5000, () => {
      console.log("App is listening on port 5000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

app.use("/api/urlShortner", urlRouter);
app.use("/", staticRouter);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
