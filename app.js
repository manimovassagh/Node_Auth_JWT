const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const router = require("./routes/Auth.route");
require("dotenv").config();

const app = express();
app.use(morgan('dev'))
const AuthRoute = require("./routes/Auth.route");
app.get("/", async (req, res, next) => {
  res.send("Salam Mani");
});

app.use("/auth", AuthRoute);

app.use(async (req, res, next) => {
  next(createError.NotFound());
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
