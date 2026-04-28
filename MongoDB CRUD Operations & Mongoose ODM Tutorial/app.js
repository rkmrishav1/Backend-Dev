require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

app.listen(3000, () => console.log("Server running"));