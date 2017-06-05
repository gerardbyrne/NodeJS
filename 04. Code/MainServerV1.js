// We use require directive to load http module and store 
// the returned HTTP instance into a http variable as follows
var http = require('http');
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello Gerry Byrne Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello Gerry Byrne – HTML Code!");;
  response.write("</body>");
  response.write("</html>");
  response.end();
});
server.listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
