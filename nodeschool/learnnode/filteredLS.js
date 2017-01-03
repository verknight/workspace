const fs = require('fs');
const path = require('path');
let pathName = process.argv[2];
let fileExt = process.argv[3];
const _EXTENSIONFILE = `${'.'+fileExt}`;
fs.readdir(pathName,function readDirectoryCallback(err,files){
  if (err) {
    throw err;
  }
  files.forEach(function getFileBasedOnExtention(file){
    if(path.extname(file) === _EXTENSIONFILE){
      console.log(file);
    }
  });
});
