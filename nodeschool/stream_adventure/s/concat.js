const concat = require('concat-stream');
process.stdin.pipe(concat(function (src){
  let rs = src.toString().split('').reverse().join('');
  console.log(`${rs}`);
}));