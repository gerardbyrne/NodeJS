/* We use require directive to load http module and store the returned HTTP instance 
   into a http variable as follows
 */
var http = require('http');
/* The next line uses the createServer() method from the http package to create a server. 
*/
var server = http.createServer();

/* 	We will now listen for request events, which happen when a new client connects. 
	The event callback we provide gets called with two arguments: the request and 
	the response objects. We can then use the request object to find the details about 
	this request and use the response object to write back to the client.
	We write a header ('ContentType': 'text/plain') and the HTTP status 200, which is a 
	code that indicates the request succeeded.
	We reply with the string "Hello Gerry Byrne\n", and then terminate the request.
*/
 server.on('request', function(req, res) 
	{
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello Gerry Byrne\n');
		res.end();
	});

/* In the server.listen line of code we bind this server to the port 8081.
*/
server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
