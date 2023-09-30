//Modules
//common JS every file is lmodule (by defaulet)
//Modules - Encapsulated code (only share minimum)

const names = require("./firstMoudule");
const sayHi = require("./secondModule");
const data = require("./altanativeModule");
require("./mind_grenade");
console.log(data);
sayHi("John"); // hello there John
sayHi(names.peter);
sayHi(names.susan);
