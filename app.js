const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();

const app = express();

app.get("/", async (req, res, next) => {
  res.send("Salam Mani");
});

app.use(async (req, res, next) => {
  //   const error = new Error("Not Found");
  //   error.status = 404;
  next(createError.NotFound("This Controller is not exist"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
