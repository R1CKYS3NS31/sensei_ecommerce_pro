const router = require("express").Router();
const user = require("../../model/user/user");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

module.exports = router;
