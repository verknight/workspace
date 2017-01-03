const fs = require('fs');
/*
  Synchronous file reading
  let buffer = fs.readFileSync(process.argv[2],'utf8');
*/
let result = 0.0;
let buffer = fs.readFile(process.argv[2],'utf8',function(err,data){
  if (err) {
    throw err;
  }
  result = data.split('\n').length - 1; //why -1
  console.log(result);
});
//the test file does not have a newline character ('\n') at the end of the last line,
//so using this method you'll end up with an array that has one more element
//than the number of newlines.
