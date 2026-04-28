const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// create 
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// find by email
router.get("/email/:email", async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.params.email });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update gpa
router.put("/:id", async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      { gpa: req.body.gpa },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student deleted");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GPA between 3.0 and 3.5
router.get("/gpa-range", async (req, res) => {
  try {
    const data = await Student.find({ gpa: { $gte: 3.0, $lte: 3.5 } });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// More than 5 courses
router.get("/courses", async (req, res) => {
  try {
    const data = await Student.find({
      $expr: { $gt: [{ $size: "$courses" }, 5] }
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Top 10 students by GPA
router.get("/top", async (req, res) => {
  try {
    const data = await Student.find().sort({ gpa: -1 }).limit(10);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Count students by city
router.get("/count-by-city", async (req, res) => {
  try {
    const data = await Student.aggregate([
      { $group: { _id: "$city", count: { $sum: 1 } } }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;