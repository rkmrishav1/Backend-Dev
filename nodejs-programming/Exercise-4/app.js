const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];

// CREATE
app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.send("Task added");
});

// READ
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// UPDATE
app.put("/tasks/:index", (req, res) => {
  tasks[req.params.index] = req.body;
  res.send("Task updated");
});

// DELETE
app.delete("/tasks/:index", (req, res) => {
  tasks.splice(req.params.index, 1);
  res.send("Task deleted");
});

app.listen(3000, () => console.log("Server running"));