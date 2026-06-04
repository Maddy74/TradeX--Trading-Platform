if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");

const HoldingsModel = require("./models/HoldingsModel");
const PositionsModel = require("./models/PositionsModel");
const OrdersModel = require("./models/OrderModel");

const PORT = process.env.PORT || 5050;

const mongoose = require("mongoose");
const dbUrl = process.env.ATLASDB_URL;

// DB Connect
mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to DB ✅"))
  .catch((err) => console.log(err));

/* ---------- MIDDLEWARE ---------- */

// ✅ CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

// ✅ JSON
app.use(express.json());

// ✅ Cookies
app.use(cookieParser());

/* ---------- ROUTES ---------- */

// Auth
app.use("/api/auth", authRoutes);

// Holdings
app.get("/allHoldings", protect, async (req, res) => {
  res.json(await HoldingsModel.find({}));
});

// Positions
app.get("/allpositions", protect, async (req, res) => {
  res.json(await PositionsModel.find({}));
});

// Orders
app.post("/neworder", protect, async (req, res) => {
  const newOrder = new OrdersModel(req.body);
  await newOrder.save();
  res.json({ message: "Order Saved Successfully ✅" });
});

/* ---------- SERVER ---------- */

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
