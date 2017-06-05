/* This code returns the square root of the number passed in.*/
 
var myPort = 8081;
 
var http = require('http');
var url = require('url');
var querystring = require('querystring');
 
function squareRoot(n) 
{
    return Math.sqrt(n);
}
 
function responder(request, response) 
{
    if(request.url === '/favicon.ico') 
	{
		return;
	}
	
    console.log('The url you entered is: ',request.url);
 
    try {
		 // Obtain the actual value of the url
        var urlValue = url.parse(request.url);
        console.log("urlValue is ",urlValue);
 
		// Obtain the actual value of the url query section
        var queryValueEntered = querystring.parse(urlValue.query);
        console.log("The query section of the url you entered is: ",queryValueEntered);
         	
		// Obtain the actual value from the url query section			
		var keyValuePairEntered = url.parse(request.url, true).query;
		console.log("The Key Value Pair string you entered is ",keyValuePairEntered);
		
		// Obtain the actual numeric value from the url query section
        var numberInJSONObject = queryValueEntered.number;
 
        // Find the square root using a function
        var squareRootValue = squareRoot(numberInJSONObject);
        var responseToWebPage = 'The square root of ' + numberInJSONObject + ' is '+ squareRootValue;
        console.log(responseToWebPage);
             
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(responseToWebPage);
        response.end();
    } catch ( e ) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Sorry - but an error occurred\n');
    }
}
 
http.createServer(responder).listen(myPort);
console.log("Listening on "+myPort);
