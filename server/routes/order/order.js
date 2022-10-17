const Order = require("../../models/order/Order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../../utils/verifyToken");

const router = require("express").Router();

// CREATE ORDER
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error(error);
  }
});

// UPDATE ORDER
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

// DELETE ORDER
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("order has been deleted...");
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

// GET USER ORDER
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

// GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status.json(orders);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: {
            $sum: "$sales",
          },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

module.exports = router;