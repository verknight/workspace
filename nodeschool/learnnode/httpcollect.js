const http = require('http');
const url_1 = process.argv[2];
const url_2 = process.argv[3];
const url_3 = process.argv[4];

http.get(url,function httpResponseHandler(response) {
  //response is instance of http.IncomingMessage
  let statuscode = response.statusCode;
  let error;
  if(statuscode !== 200){
    error = new Error(`Request failed. Status code: ${statuscode}`);
  }
  if(error){
    console.log(error.message);
  }
  let result = [];
  response.setEncoding('utf8');
  response.on('data',function resOnDataListener(chunk){
    result += chunk;
  });
  response.on('end',function resOnEndListener(){
    console.log(result.length);
    console.log(result);
  });

})
