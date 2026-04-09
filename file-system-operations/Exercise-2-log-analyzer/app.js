const fs = require("fs");

let errorCount = 0;

const stream = fs.createReadStream("log.txt", "utf-8");

stream.on("data", (chunk) => {
  const lines = chunk.split("\n");
  lines.forEach(line => {
    if (line.includes("ERROR")) errorCount++;
  });
});

stream.on("end", () => {
  console.log("Total Errors:", errorCount);
});