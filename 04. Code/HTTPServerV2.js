/* We use require directive to load http module use the createServer() method 
   from the http package to create a server.
   The event callback we provide gets called with two arguments: the request and 
   the response objects. We can then use the request object to find the details about 
   this request and use the response object to write back to the client.
   We write a header ('ContentType': 'text/plain') and the HTTP status 200, which is a 
   code that indicates the request succeeded.
   We reply with the string "Hello Gerry Byrne\n", and then terminate the request.
*/
require('http').createServer(function(req, res) 
	{
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello Gerry Byrne (Shorter Code Version)\n');
	}).listen(8081);

/* Print a message to the console.
*/
console.log('Server running at http://127.0.0.1:8081/');
