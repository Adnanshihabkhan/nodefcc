const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("first.txt", "utf8");
const second = readFileSync("second.txt", "utf8");
console.log(first);
console.log(second);
writeFileSync(
  "resultAsync.txt",
  `updated result after changing the name  is here is the result:${first}, ${second}`,
  {
    flag: "a",
  }
);
