// Unlike Vanilla JS, NodeJS has common core modules relating to OS, file system, etc. (used in server-side operations) 
const os = require('os');
const path = require('path');
const math = require('./math.js');

// NodeJS runs on a server, whereas Vanilla JavaScript typically runs in a web browser
console.log("Hello World!");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(math.add(5, 3));