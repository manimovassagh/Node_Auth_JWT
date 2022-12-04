const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();

const app = express();

const obj = {
  name: "mani",
  age: "44",
};

app.get("/", async (req, res, next) => {
  res.send(obj);
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
