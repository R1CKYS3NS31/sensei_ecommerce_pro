const User = require("../../models/user/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../../utils/verifyToken");

const router = require("express").Router();

router.get("/users", (req, res) => {
  res.send("user successfull");
  console.log("user successfull!");
});
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    var encrypted = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

module.exports = router;
