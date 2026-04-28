const jwt = require("jsonwebtoken");
const SECRET = "secretkey";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const otp = req.headers.otp;

  if (!token || otp !== "1234") return res.status(401).send("Unauthorized");

  try {
    jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(403).send("Invalid token");
  }
};