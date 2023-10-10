const express = require("express");
const app = express();
const serverless = require("serverless-http");
require('dotenv').config();
const mongoose = require("./config/mongoose.js");

const PORT = process.env.PORT || 3000;

app.use("/", require("./routes/index.js"));

if (process.env.ENVIRONMENT === "lambda") {
  module.exports.handler = serverless(app);
} else {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
