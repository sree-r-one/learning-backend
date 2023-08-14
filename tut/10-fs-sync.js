const { readFileSync, writeFileSync } = require("fs");

// read contents of the first file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// write contents of the first and second file to the third file
writeFileSync(
  "./content/results-sync.txt",
  `Here is the result :  ${first} ${second}`,
  { flag: "a" }
);

console.log(first, second);
