const router = require("express").Router();
const user = require("../../models/user/User");
const CryptoJS = require("crypto-js");
const User = require("../../models/user/User");

// REGISTER
router.post("/register", async (req, res) => {
  var encrypted = CryptoJS.AES.encrypt(
    req.body.password,
    process.env.PASS_SEC
  ).toString();

  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: encrypted,
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
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("wrong (username) or password!");
    var decrypted = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const OriginalPassword = decrypted.toString(CryptoJS.enc.Utf8);
    OriginalPassword !== req.body.password && res.status(401).json("wrong password");

    const {password,...others}  =user._doc

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

module.exports = router;
