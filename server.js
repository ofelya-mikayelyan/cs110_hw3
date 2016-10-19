const http = require ("http");
const httpServer = http.createServer(function(req,res){
	if (req.url==='/hello'){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World\n');
	}
	else if (req.url==='/world'){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Goodbye World\n');
	}
	else if (req.url==='/day'){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Good Day\n');
	}
	else if (req.url==='/university'){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('AUA\n');
	}
	else if (req.url==='/programmer'){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Wise Professional\n');
	}
});
httpServer.listen(3001);