/* We use require directive to load http module use the createServer() method 
   from the http package to create a server.
   The event callback we provide gets called with two arguments: the request and 
   the response objects. We can then use the response object to communicate with 
   the client. We write two headers: 
	   'ContentType': 'text/plain') and  
	   'Cache-Control': 'max-age=3600' 
   we also use the HTTP status 200, which is a code that indicates the request succeeded.
*/
require('http').createServer(function(req, res) 
	{
		res.setHeader('Content-Type', 'text/html');
		
				res.writeHead(200, {
				//'Content-Type': 'text/plain',
				'Cache-Control': 'max-age=3600' });	
				
		res.write('<h1>Hello Gerry Byrne - HTTP Header Example</h1>');
		//res.end('Hello Gerry Byrne - HTTP Header Example');	
		
		res.write("Hello Gerry - this is writing the body as a string<br><br>");
		
		var buffer = new Buffer("Hello Gerry - this is writing the body using the buffer<br><br>");
		res.end(buffer);
	}).listen(8081);	
/* Print a message to the console.
*/
console.log('Server running at http://127.0.0.1:8081/');
