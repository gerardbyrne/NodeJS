/* We use require directive to load http module use the createServer() method 
   from the http package to create a server.
   The event callback we provide gets called with two arguments: the request and 
   the response objects. We can then use the response object to communicate with 
   the client. We write the header: 
	   'ContentType': 'video/mp4') and  
	   'Cache-Control': 'max-age=3600' 
   we also use the HTTP status 200, which is a code that indicates the request succeeded.
   We have also told the browser to expect video in mp4 format and we open the movie file
   as a ReadStream piping it to the WriteStream.
*/
var fs = require('fs');

require('http').createServer(function(req, res) 
	{
		res.writeHead(200, {'Content-Type': 'video/webm'}); 
		// Also could use 'video/mp4', 'video/ogg'
		var rs = fs.createReadStream('bunny.webm');
		rs.pipe(res);		
	}).listen(8081);	

/* Print a message to the console.
*/
console.log('Server running at http://127.0.0.1:8081/');