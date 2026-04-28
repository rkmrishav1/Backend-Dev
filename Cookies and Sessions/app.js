const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const sessionRoutes = require("./Routes/sessionRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use("/", sessionRoutes);

app.listen(3000, () => console.log("Session server running"));