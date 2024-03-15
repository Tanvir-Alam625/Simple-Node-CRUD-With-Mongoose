const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  "mongodb+srv://devtanvir01:BZMomPJxtQtBSeb9@cluster0.9xa8aky.mongodb.net/";
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB error:", err));

// Routes
app.use("/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
