const http = require('http');
// const urls = process.argv.slice(2,5);
// const urls = [process.argv[4],process.argv[3],process.argv[2]];
let results = [];
let count = 0;

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}
function sendGETRequest(index,next){
    http.get(process.argv[2+index],function responseHandler(response){
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
        results[index] =result;
        count++;
        if(count === 3){
          printResults();
        }
      });
    }).on('error',function httpOnErrorListener(error){
      console.log(error.message);
    });
}
function sendGETRequests(urls){
  urls.forEach(function loopThroughUrls(url){
    sendGETRequest(url,function passedContent(result){
      results.push(result);
      count++;
      if(count === 3){
        printResults();
      }
    });
  });
}
for (var i = 0; i < 3; i++) {
  sendGETRequest(i);
}
