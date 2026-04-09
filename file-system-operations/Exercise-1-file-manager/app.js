const fs = require("fs");

const command = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (command) {
  case "read":
    console.log(fs.readFileSync(file, "utf-8"));
    break;

  case "write":
    fs.writeFileSync(file, content);
    console.log("File written");
    break;

  case "delete":
    fs.unlinkSync(file);
    console.log("File deleted");
    break;

  case "list":
    const files = fs.readdirSync(".");
    console.log(files);
    break;

  default:
    console.log("Invalid command");
}