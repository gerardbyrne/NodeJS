/* We use require directive to load http module use the createServer() method 
   from the http package to create a server.
   The event callback we provide gets called with two arguments: the request and 
   the response objects. We can then use the response object to communicate with 
   the client. We use it to write error messages if errors occur of the contents
   of the file if it exists.   

   To see the file we use the url
   http://localhost:8081
*/
var filesystem = require('fs');

require('http').createServer(function(request, response) 
{
	var file = 'Test.txt';
	console.log('Trying to locate file, read and display it', file);
	
	function reportError(err) 
	{
		console.log(err);
		response.writeHead(500);
		response.end('There has been an internal server error');
	}
	
	filesystem.exists(file, function(exists) 
	{
		if (exists) 
		{
			filesystem.stat(file, function(err, stat) 
			{
				var myreadstream;
				if (err) 
				{
					return reportError(err);
				}
				if (stat.isDirectory()) 
				{
					response.writeHead(403); response.end('This is a directory not a file - access denied');
				} 
				else 
				{
					myreadstream = filesystem.createReadStream(file);
					myreadstream.on('error', reportError);
					response.writeHead(200);
					myreadstream.pipe(response);
				}
			});
		} 
		else
			{
				response.writeHead(404);
				response.end('File not found');
			}
	});
}).listen(8081);
	
/* Print a message to the console.
*/
console.log('Server running at http://127.0.0.1:8081/');
