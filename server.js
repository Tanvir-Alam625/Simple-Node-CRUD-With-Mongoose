const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes.js");
const path = require("path");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB error:", err));
mongoose.set("strictQuery", false);

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "doc.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
