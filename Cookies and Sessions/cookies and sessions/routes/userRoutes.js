const express = require("express");
const router = express.Router();

const mfa = require("../middleware/mfa");
const sanitize = require("../middleware/sanitize");

let users = [
  { id: 1, name: "Rishav", deleted: false },
  { id: 2, name: "Rahul", deleted: false }
];

router.get("/", (req, res) => {
  res.json(users.filter(u => !u.deleted));
});

router.delete("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) user.deleted = true;
  res.send("Soft deleted");
});

router.post("/secure", mfa, (req, res) => {
  res.send("Secure route accessed");
});

router.post("/data", sanitize, (req, res) => {
  res.json(req.body);
});

module.exports = router;