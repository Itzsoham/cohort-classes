const fs = require("fs");

function print(err, contents) {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(contents);
}
// Asynchronous read with callback function
fs.readFile("c.txt", "utf-8", print);

// Synchronous read
const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);
