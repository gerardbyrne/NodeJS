// We use require directive to load http module and store 
// the returned HTTP instance into a http variable as follows
var http = require("http");

// We will now create the server and then
// get the header from the received message
// the header is the information, in the form of a 
// text record, that a users browser sends to a Web 
// server containing the details of what the browser 
// wants and will accept back from the server. 
// The request header also contains the type, version 
// and capabilities of the browser that is making the 
// request so that server returns compatible data.
// When the server receives the header it will return 
// an HTTP response header to the client that is attached 
// to the file(s) being sent.

// We use the request.method to see if POST or GET was used
// Two commonly used methods for a request-response between 
// a client and server are: GET and POST.
// GET - Requests data from a specified resource
// POST - Submits data to be processed to a specified resource

// We use the request.url to see if POST or GET was used
// Two commonly used methods for a request-response between 
// a client and server are: GET and POST.
// GET - Requests data from a specified resource
// POST - Submits data to be processed to a specified resource 

http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  
  // Create an array to hold the data which is read
  var body = [];
  request.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
  });
}).listen(8081); // Activates this server, listening on port 8081
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');