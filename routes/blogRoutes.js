// routes/blogRoutes.js
const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// Route to get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("index", { blogs });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Route to create a new blog
router.post("/add", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Route to view a single blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.render("blog", { blog });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
