const router = require("express").Router();
const user = require("../../model/user/user");
const CryptoJS = require("crypto-js");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // const user = await
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
