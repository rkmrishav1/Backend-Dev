const fs = require("fs");
const path = require("path");

const dir1 = path.join(__dirname, "folder1");
const dir2 = path.join(__dirname, "folder2");

if (!fs.existsSync(dir2)) {
  fs.mkdirSync(dir2);
}

if (!fs.existsSync(dir1)) {
  console.log("folder1 does not exist");
  process.exit();
}

const files = fs.readdirSync(dir1);

files.forEach(file => {
  const src = path.join(dir1, file);
  const dest = path.join(dir2, file);
//hello
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${file}`);
  }
});