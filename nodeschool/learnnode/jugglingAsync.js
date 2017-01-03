const http = require('http');
const promise = require('promise');
const urls = process.argv.slice(2,5);

function sendGETRequest(url,next){
    http.get(url,function responseHandler(response){
      let statuscode = response.statusCode;
      let error;
      if(statuscode !== 200){
        error = new Error(`Request failed. Status code: ${statuscode}`);
      }
      if(error){
        console.log(error.message);
      }
      let result = '';
      response.setEncoding('utf8');
      response.on('data',function resOnDataListener(chunk){
        result += chunk;
      });
      response.on('end',function resOnEndListener(){
        next(result);
      });
    }).on('error',function httpOnErrorListener(error){
      console.log(error.message);
    });
}
function sendGETRequests(urls,next){
  let count = urls.length;
  let data = [];
  urls.forEach(function loopThroughUrls(url){
    sendGETRequest(url,function passContents(result){
      data.push(result);
      count--;
      if(count <= 0){
        next(data);
      }
    });
  });
}
sendGETRequests(urls,function(data){
  data.forEach(function printout(item) {
    console.log(item);
  })
});
