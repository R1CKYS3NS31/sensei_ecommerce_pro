const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user/user");
const authRoute = require("./routes/auth/auth");

dotenv.config(); // create your .env file and add MONGO_URL, PORT, PASS_SEC

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connect successfull!"))
  .catch((err) => console.log(err));

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  try {
    res.send("<h1>Sensei E-commerce Back-end</h1>");
  } catch (error) {
    console.error(error);
  }
});
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

const server = app.listen(process.env.PORT || 5000, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server is listening at http://${host}:${port}`);
});
