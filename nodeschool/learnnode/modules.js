const fs = require('fs');
const path = require('path');
const filter = require('./filterModule.js');
const _DIR_PATHNAME = process.argv[2];
const _EXTENSION_NAME = process.argv[3];
//import { filterByExtensionName } from './filterModule.js';
// console.log(`Path name: ${_DIR_PATHNAME}`);
// console.log(`File extension: ${_EXTENSION_NAME}`);
filter(_DIR_PATHNAME,_EXTENSION_NAME,function(err,data){
  if(err){
    console.log(err);
  }
  data.forEach(function(item){
    console.log(item.toString());
  })
});
