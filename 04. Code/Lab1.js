var listeningPort = 8081;
var http = require("http");
var numberOfRequestMade = 0;
 
function responder(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log(request.url);
	
 // Not counting the invalid request for favicon 
	   if (request.url === '/favicon.ico') 
	   { 
		 response.writeHead(200, {'Content-Type': 'image/x-icon'} ); 
		 response.end(); 
		 console.log('favicon requested - not counted in request count'); 
		 return; 
	   } 
	   else
	   {
	     numberOfRequestMade++;
	     response.write("Welcome to Node.js - you are visitor number "+ numberOfRequestMade);
     response.end();	
		}	
}
 
http.createServer(responder).listen(listeningPort);
console.log("The Node server is listening on port - "+ listeningPort);
