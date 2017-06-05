/* We use require directive to load http module use the createServer() method 
   from the http package to create a server.
   The event callback we provide gets called with two arguments: the request and 
   the response objects. We can then use the response object to communicate with 
   the client.   

   To see the file we use the url
   http://localhost:8081
*/
require('http').createServer(function(req, res) 
{
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var left = 10;
	var interval = setInterval(function() 
	{
		for(var i = 0; i< 2; i++) 
		{
			res.write(Date.now() + " ");
		}
			if (-- left === 0) 
		{
			clearInterval(interval);
			res.end();
		}
	}, 1000);
}).listen(8081);
	
/* Print a message to the console.
*/
console.log('Server running at http://127.0.0.1:8081/');
