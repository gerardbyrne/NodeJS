/* The next line uses the createServer() method from the net package to create
    a server. In the next line of code we set the port as 8081.
 */
var server = require('net').createServer();
var port = 8081;

// The next line sets the on to listen and it therefore will listen on port 8081
 server.on('listening', function() 
{
	console.log('Server is listening on port', port);
});

// The next line sets the on to connect and to receive the socket object 
server.on('connection', function(socket) 
{
	console.log('Server has a new connection');
	socket.end();
	server.close();
});

// The next line sets the on to close the connection
server.on('close', function() 
{
	console.log('Server is now closed');
});

// The next handles any error that occur at server level e.g trying to use a port
// that is already in use.
server.on('error', function(errorreceived) 
{
	console.log('Error occurred:', errorreceived.message);
});

server.listen(port);
