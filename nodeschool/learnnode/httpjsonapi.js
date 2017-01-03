const http = require('http');
const _PORT_NUMBER = process.argv[2];
const url = require('url');

function isoJSONTime(time) {
	return {
		"hour": time.getHours(),
		"minute": time.getMinutes(),
		"second": time.getSeconds()
	};
}

function unixJSONTime(time) {
	return {"unixtime":time.getTime()};
}
const server = http.createServer(function onRequestListener(request, response) {
	if (request.method === 'GET') {
		let parsedURLObj = url.parse(request.url, true);
		let queryString = parsedURLObj.query.iso;
		let time = new Date(queryString);
		let result;
		switch (parsedURLObj.pathname) {
			case '/api/parsetime':
				result = isoJSONTime(time);
				break;
			case '/api/unixtime':
				result = unixJSONTime(time);
				break;
			default:
				break;
		}
		if(result){
			response.writeHead(200, {
				'Content-Type': 'application/json'
			});
			response.write(JSON.stringify(result));
			response.end();
		}else{
			response.writeHead(404)
			response.end();
		}
	}
});
server.listen(_PORT_NUMBER);