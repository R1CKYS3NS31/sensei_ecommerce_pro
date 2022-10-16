const router = require("express").Router();
const user = require("../../model/user/user");
const CryptoJS = require("crypto-js");
const { findOne } = require("../../model/user/user");


// REGISTER
router.post("/register", async (req, res) => {
  var encrypted =  CryptoJS.AES.encrypt(
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
    const user = await user.findOne({username:req.body.username})
    var decrypted = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

  } catch (error) {
    res.status(500).json(error)
    console.error(error);
  }
});

module.exports = router;
