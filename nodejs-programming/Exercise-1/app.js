const fs = require("fs");

const data = fs.readFileSync(__dirname + "/input.txt", "utf-8");

const words = data.split(/\s+/).length;

fs.writeFileSync(__dirname + "/output.txt", `Word count: ${words}`);

console.log("Word count written to output.txt");