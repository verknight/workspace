const _PORT_NUMBER = process.argv[2];
const _FILE_LOCATION = process.argv[3];
const _SUCCESS_CODE = 200;
const http = require('http');
const fs = require('fs');
const server = http.createServer(function connectionHandler(request,response){
  let reader = fs.createReadStream(_FILE_LOCATION,{autoClose:true});
  reader.pipe(response);
  response.writeHead(200, {'content-type':'text/plain'});
  response.on('error',function resOnErrorListener(err){
    console.log(`Response error: ${err.message}`);
    this.end();
  });
  response.on('pipe',function resOnPipeListener(src) {
    console.log(`Got piped from ${src}`);
  });
});
server.listen(_PORT_NUMBER);
