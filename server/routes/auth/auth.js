const router = require("express").Router();
const user = require("../models/user/user");

// REGISTER
router.post("/register", (req, res) => {
  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save();
});

module.exports = router;
