// app.js
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Set view engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static("public"));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", blogRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
