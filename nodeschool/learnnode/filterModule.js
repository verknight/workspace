const fs = require('fs');
const path = require('path');

module.exports = function (dirPath,extname,callback) {
  if(typeof callback === 'function'){
    fs.readdir(dirPath,function readDirectoryCallback(err,files){
        let data = null;
        if (err) {
          return callback(err,data);
        }
        data = files.filter(function getAllItemWithExtensionName(eachItem){
          return path.extname(eachItem) === '.'+extname;
        });
        if(!data){
          return callback('Callback',null);
        }else{
          return callback(null,data);
        }
      });
  }
};
