const http = require('http');
const nodejsUrl = 'http://nodejs.org/dist/index.json';
http.get(nodejsUrl,function responseHandler(response){
  const statusCode = response.statusCode;
  const contentType = response.headers['content-type'];
  let error;
  if(statusCode !== 200){
    error = new Error(`Request failed.
                      Status code ${statusCode}.`);
  }else if(!/^application\/json/.test(contentType)){
    error = new Error(`Invalid content-type
                      Expected application/json application/json but received ${contentType}`);
  }
  if(error){
    console.log(error.message);
    response.resume();
    return;
  }
  response.setEncoding('utf8');
  let rawData = '';
  response.on('data', function resOnDataListener(chunk){
    rawData += chunk;
  });
  response.on('end', function resOnEndListener(){
    try {
        let parsedData = JSON.parse(rawData);
        console.log(parsedData);
    } catch (e) {
        console.log(e.message);
    }
  });
}).on('error',function httpOnErrorListener(err){
  console.log(`Got error: ${err.message}`);
});
