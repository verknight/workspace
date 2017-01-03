const fs = require('fs');


function read_directory(path, next){
  fs.readdir('.',function getAllFileHandler(err,files) {
    let count = files.length;
    let results = {};
    files.forEach(function loopThroughFiles(filename) {
      fs.readfile(filename,function getFileContent(data){
        results[filename] = data;
        count--;
        if(count <= 0){
          next(results);
        }
      });
    })
  });
}
function read_directories(paths,next){
    let count = paths.length;
    let data = {};
    paths.forEach(function loopThroughPaths(path){
      read_directory(path, function passResults(result){
        data[path] = result;
        count--;
        if(count <= 0){
          next(data);
        }
      });
    });
}
read_directories(['articles','authors','skin'],function getResults(data){
  // console.log(data);
});
