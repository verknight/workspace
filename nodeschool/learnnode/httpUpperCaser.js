const http = require('http');
const _PORT_NUMBER = process.argv[2];
const server = http.createServer(function onConnectionListener(request,response) {
  if(request.method === 'POST'){
    let body = '';
    request.setEncoding('utf8');
    request.on('data',function (chunk){
      body+=chunk;
    });
    request.on('end', function (){	
      response.writeHead(200);
      response.end(body.toUpperCase());
    });
  }
});
server.listen(_PORT_NUMBER, function serverListenCallback() {
  console.log(`Server is listening on port: ${_PORT_NUMBER}`);
});
