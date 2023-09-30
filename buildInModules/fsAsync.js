const { readFile, writeFile } = require("fs");
readFile("first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(`${err}`);
    return;
  }
  const first = result;
  console.log(first);
  readFile("second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(`${err}`);
      return;
    }
    const second = result;
    console.log(second);
    writeFile(
      "resultAsync.txt",
      `here is the result of asyncronus:${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
