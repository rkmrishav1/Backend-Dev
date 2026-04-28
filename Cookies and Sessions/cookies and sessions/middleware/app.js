const express = require("express");

const logger = require("./middleware/logger");
const activity = require("./middleware/activity");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use(logger);
app.use(activity);

app.use("/", userRoutes);

app.listen(4000, () => console.log("Middleware server running"));