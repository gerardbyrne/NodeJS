/* The next line uses the createServer() method from the net package to create
    a server. In the final line of code we bind this server to the port 8081.
    We have passed in a callback function to the createServer() method and this is called
    every time we have a connection. We then use the socket object that we are handed 
    and this socket can be used to send data to and receive data from the client. The 
    server object is an event emitter.
 */
require('net').createServer(function(socket) 
{
	// Setup a new connection
	socket.on('data', function(data) 
	{
	// Data has now been retrieved
	});

	socket.on('end', function(data) 
	{
	// Connection is now closed and the server is not bound to any port
	});

	socket.write('We have set up a simple TCP server');
}).listen(8081);
