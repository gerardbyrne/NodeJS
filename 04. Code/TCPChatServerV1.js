/* The next two line use the createServer() method from the net package to create
    a server. In the server.listen line of code we bind this server to the port 8081.
    We have also set up a function which writes an error message if an error occurs. 
	We have also set up a function which informs us that thes serve has been closed. 
 */

var net = require('net');
var server = net.createServer();

/* Since we are creating a chat server with multiple connections we will need to store
   the list of connection in a collection of some type. We will use an array called 
   activeConnections. 
 */
 var activeConnections = [];

/* We now need to accept connections to the server so that users can chat. To do this 
   we will set up a connection function that will tell us of any new connections. 
 */
 server.on('connection', function(socket) 
	{  
		console.log('New connection made'); 
		
	/* Now we have an array to hold the connections we will populate it using the push.
	   command. We will push the socket we have received from the connection to the array.
	*/		
	activeConnections.push(socket);

	/* We now need to listen to the connections and get the data coming from them 
	   and then bind them to the data event. 
	*/
	socket.on('data', function(data) 
		{    
			console.log('Receiving data from the connection:', data);   
		
		/* Now we have all the connections in one array we can easily communicate with them.
		   In a chat server we will wnat to distribute every new message to every connected
		   socket. We will do this using a foreach iteration on the activeConnectionsarray.
		*/
		 activeConnections.forEach(function(otherSocket) 
			{      
				if (otherSocket !== socket) 
					{        
						otherSocket.write(data);
					}    
			});		 
		}); 
		
		/* Now we have to handle closed connections. When a connection closes we will need
		   to remove it from the connections array so that no new messages are sent to it.
		*/
		 socket.on('close', function() 
			{    
				console.log('A connection has been closed');    
				var index = sockets.indexOf(socket);    
				sockets.splice(index, 1); 
			 });		 
	});
	
server.on('error', function(err) 
	{  
	console.log('Server error:', err.message); 
	});
	
server.on('close', function() 
	{  
	console.log('Server closed'); 
	});
	
server.listen(8081);