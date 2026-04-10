const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Sample data
let users = ["Rishav", "Rahul", "Aman"];
let posts = [];

// 1️⃣ Query route
app.get("/users", (req, res) => {
  const name = req.query.name;
  const filtered = users.filter(u => u.toLowerCase().includes(name || ""));
  res.json(filtered);
});

// 2️⃣ Middleware (response time)
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(`${req.method} ${req.url} - ${Date.now() - start}ms`);
  });
  next();
});

// 3️⃣ Contact form
app.get("/contact", (req, res) => {
  res.render("form");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Form submitted");
});

// 4️⃣ 404 page
app.use((req, res) => {
  res.status(404).render("error");
});

// 5️⃣ Gallery
app.get("/gallery", (req, res) => {
  res.render("gallery", { images: ["img1.jpg", "img2.jpg"] });
});

// 6️⃣ Blog
app.get("/blog", (req, res) => {
  res.render("blog", { posts });
});

app.post("/blog", (req, res) => {
  posts.push(req.body);
  res.redirect("/blog");
});

app.get("/blog/:id", (req, res) => {
  res.render("post", { post: posts[req.params.id] });
});

app.listen(3000, () => console.log("Server running on port 3000"));