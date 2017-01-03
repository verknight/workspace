const split = require('split');
const stream = require('through2');
let linecount = 0;
let tr = stream(function (chunk,_,next){
  let line = chunk.toString();
  this.push(linecount % 2 ===0 ? line.toLowerCase()+'\n' : line.toUpperCase()+'\n');
  linecount++;
  next();
});
process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);
