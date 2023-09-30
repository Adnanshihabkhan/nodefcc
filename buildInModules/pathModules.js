const path = require("path");
console.log(path.sep);
const filepath = path.join("nodejsproject", "freecodecamp", "text.txt");
console.log(path.basename(filepath));
console.log(filepath);
console.log(
  path.resolve(__dirname, "nodejsproject", "freecodecamp", "text.txt")
);
