const http = require('http');
const url = process.argv[2];
http.

http.get(url, function httpResponseHandler(response) {
  //response is instance of http.IncomingMessage
  const statuscode = response.statusCode;
  let error;
  if (statuscode !== 200) {
    error = new Error(`Request error. ${statuscode}`);
  }
  if (error) {
    console.log(error.message);
  }
  response.setEncoding('utf8');
  response.on('data', function resOnDataListener(chunk) {
    console.log(chunk);
  });
}).on('error', function httpErrorListener(err) {
  console.log(err.message);
});