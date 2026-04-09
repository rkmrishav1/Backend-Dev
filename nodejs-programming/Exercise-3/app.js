const os = require("os");
const fs = require("fs");

setInterval(() => {
  const info = `
CPU: ${os.cpus().length}
Memory: ${os.totalmem()}
Platform: ${os.platform()}
-----------------------
`;

  fs.appendFileSync("log.txt", info);
}, 5000);