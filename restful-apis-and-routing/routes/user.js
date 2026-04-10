const express = require("express");
const router = express.Router();

let users = [];

// CREATE
router.post("/", (req, res) => {
  users.push(req.body);
  res.send("User added");
});

// READ ALL
router.get("/", (req, res) => {
  res.json(users);
});

// READ ONE
router.get("/:id", (req, res) => {
  res.json(users[req.params.id]);
});

// UPDATE
router.put("/:id", (req, res) => {
  users[req.params.id] = req.body;
  res.send("User updated");
});

// DELETE
router.delete("/:id", (req, res) => {
  users.splice(req.params.id, 1);
  res.send("User deleted");
});

module.exports = router;