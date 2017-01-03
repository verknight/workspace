const net = require('net');
const strftime = require('strftime');
const portNumber = process.argv[2];
const server = net.createServer(function (socket){
  socket.write(`${strftime('%F %R')}\n`);
  socket.end();
});
server.listen(portNumber,function(){
  // console.log(`Server is listening on port ${portNumber}`);

});
