const express = require("express");
const createError = require("http-errors");
const router = express.Router();
const User = require("../Models/User.module");

/**
 * register user and save it in Database
 */
router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw createError.BadRequest();
    const doesExist = await User.findOne({ email: email });
    if (doesExist)
      throw createError.Conflict("This Email is already been registered !!! ");

    const user = new User({ email, password });
    const savedUser = await user.save(user);
    res.send(savedUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  res.send("login route");
});
router.post("/refresh-token", async (req, res, next) => {
  res.send("refresh token route");
});
router.delete("/logout", async (req, res, next) => {
  res.send("That is logout route");
});

module.exports = router;
