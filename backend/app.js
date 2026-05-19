const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const authRouter      = require("./routes/auth");
const productsRouter  = require("./routes/products");
const favoritesRouter = require("./routes/favorites");
const reviewsRouter   = require("./routes/reviews");
const verifyRouter    = require("./routes/verify");

app.use("/api/auth",      authRouter);
app.use("/api/products",  productsRouter);
app.use("/api/favorites", favoritesRouter);
app.use("/api/reviews",   reviewsRouter);
app.use("/api/verify",    verifyRouter);

app.get("/", (req, res) => {
  res.json({ message: "TU Marketplace API Working..." });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});