const fs = require('fs');
let reader = fs.createReadStream(process.argv[2]);
reader.pipe(process.stdout);
// input - output
process.stdin.pipe(process.stdout);