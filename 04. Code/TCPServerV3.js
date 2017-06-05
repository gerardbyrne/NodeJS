// Create a variable to hold the port number;
var port = 8081;

/* The next line uses the createServer() method from the net package to create
    a server. In the final line of code we bind this server to the port which is 8081.
    We have passed in a callback function to the createServer() method and this is called
    every time we have a connection. We then use the socket object that we are handed 
     and this socket can be used to send data to and receive data from the client. The 
     server object is an event emitter.
 */
var server = require('net').createServer(function(socket) 
{
	console.log('This is a new connection');

/*
Since our socket object is also a writable stream it allows us to write buffers or strings to
the socket by using socket.write(). We can tell the socket that it should terminate the connection
after all data has been written by calling socket.end(). 
*/
	socket.setEncoding('utf8');

	socket.write("Connection made - we can now type what we want. To finish type 'quit'.\n");

	socket.on('data', function(data) 
	{
		console.log('got:', data.toString());

		if (data.trim().toLowerCase() === 'quit') 
		{
			socket.write('Finishing now - as you wish to quit!');
			return socket.end();
		}

		socket.write(data);
	});

	socket.on('end', function() 
	{
		console.log('Client connection ended');
	});
	

	// Create a writeable stream - a text file in the same location as this file is located
	// As the data is entered it it is held in the variable called streamToWriteTo and
	// is written to the file when the Enter key is pressed.
	// var streamToWriteTo = require('fs').createWriteStream('WrittenTextGerry.txt');

	// socket.pipe(streamToWriteTo);
	
	// Create a readable stream - it will read a text file in the same location as this file is located
	// As the data is read it is held in the variable called streamToWriteFrom and
	// is piped to the socket

	var streamToWriteFrom = require('fs').createReadStream('WrittenTextGerry.txt');
	
	streamToWriteFrom.pipe(socket);

}).listen(port);
