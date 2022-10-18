const router = require("express").Router();

const stripe = require("stripe")(
  "sk_test_51LYmN6GRVcB5JNrqd16DQM9wCJaBKewC5NTXsXvREFULR1JrLeLH06F2O8KKaEQBkhODdwVHcAnnmO77gpzUcyGT00yTAuLBOO"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "KES",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.error(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
