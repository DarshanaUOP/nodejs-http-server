var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res) {
	console.log("Request : "+req.url);
	res.writeHead(200,{'Content-Type' : 'text/html'});

	var indexPage = fs.createReadStream('../index.html',"utf-8");
	indexPage.pipe(res);
});

var  serverIP = '127.0.0.1';
var port = 3000;
server.listen(port,serverIP);
console.log("Server is running on " + serverIP + ":" + port);