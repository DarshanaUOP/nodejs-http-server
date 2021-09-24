var http = require("http");

var server = http.createServer(function(req,res) {
	console.log("Request : "+req.url);
	res.writeHead(200,{'Content-Type' : 'text/plain'});
	res.end("Darshana Ariyarathna");
});

var  serverIP = '127.0.0.1';
var port = 3000;
server.listen(port,serverIP);