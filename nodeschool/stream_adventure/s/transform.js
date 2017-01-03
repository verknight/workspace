const stream = require('through2');

let tr = stream(function(chunk,enc,next){
  this.push(chunk.toString().toUpperCase());
  next();
});

process.stdin.pipe(tr).pipe(process.stdout);