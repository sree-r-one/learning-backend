const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  // error handling
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
});
