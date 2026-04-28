const fs = require("fs");

module.exports = (req, res, next) => {
  const log = `${new Date()} ${req.method} ${req.url}\n`;
  fs.appendFileSync("log.txt", log);
  next();
};