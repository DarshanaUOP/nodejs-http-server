var http = require("http");
var fs = require("fs");
var os = require('os');

var server = http.createServer(function (req, res) {
	console.log("Request : " + req.url);

	if (req.url == '/' || req.url == '/home') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		var indexPage = fs.createReadStream('../index.html', "utf-8");
		indexPage.pipe(res);
	} else if (req.url == '/api') {
		res.writeHead(200, { "Content-Type": "application/json" });
		let date_ob = new Date();
		var jsonResponse = {
			'a': 1,
			'b': 'my world',
			'time': date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds()
		};
		res.end(JSON.stringify(jsonResponse));
	} else {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		var indexPage = fs.createReadStream('../404.html', "utf-8");
		indexPage.pipe(res);
	}
});

console.log("Searching IP...");

var serverIP = externalIP();// '127.0.0.1';
console.log(serverIP);

var port = 3000;
server.listen(port, serverIP);
console.log("Server is running on " + serverIP + ":" + port);

function externalIP() {
	var interfaces = os.networkInterfaces();
	for (var k in interfaces) {
		for (var k2 in interfaces[k]) {
			var address = interfaces[k][k2];
			if (address.family === 'IPv4' && !address.internal) {
				return address.address;
				// addresses.push(address.address);
			}
			//console.log(address);
		}
	}
}