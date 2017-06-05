// Stage 1
/*
var http = require('http');

var staticServe = function(request, response) {  
    response.statusCode = 200;
    response.write('All is OK');
    return response.end();
};

var httpServer = http.createServer(staticServe);

httpServer.listen(8081); 
*/



// Stage 2
/*
var path = require('path');  
var http = require('http');

var staticBasePath = './';

var staticServe = function(request, response) {  
    var fileLoc = path.resolve(staticBasePath);
    fileLoc = path.join(fileLoc, request.url);

    response.statusCode = 200;

// Write the full file path to the web page
    response.write(fileLoc);
    return response.end();
};

var httpServer = http.createServer(staticServe);

httpServer.listen(8081);  

*/


// Stage 3
/*
var fs = require('fs');  
var path = require('path');  
var http = require('http');

var staticBasePath = './';

var staticServe = function(request, response) {  
    var fileLoc = path.resolve(staticBasePath);
    fileLoc = path.join(fileLoc, request.url);

    fs.readFile(fileLoc, function(err, data) {
        if (err) {
            response.writeHead(404, 'Not Found');
            response.write('404: File Not Found!');
            return response.end();
        }

        response.statusCode = 200;

        response.write(data);
        return response.end();
    });
};

var httpServer = http.createServer(staticServe);

httpServer.listen(8081);  

*/

// Stage 4
/*
var fs = require('fs');  
var path = require('path');  
var http = require('http');

var staticBasePath = './';

var cache = {};

var staticServe = function(request, response) {  
    var fileLoc = path.resolve(staticBasePath);
    fileLoc = path.join(fileLoc, request.url);

    // Check the cache first...
    if (cache[fileLoc] !== undefined) {
        response.statusCode = 200;

        response.write(cache[fileLoc]);
        return response.end();
    }

    // ...otherwise load the file
    fs.readFile(fileLoc, function(err, data) {
        if (err) {
            response.writeHead(404, 'Not Found');
            response.write('404: File Not Found!');
            return response.end();
        }

        // Save to the cache
        cache[fileLoc] = data;

        response.statusCode = 200;

        response.write(data);
        return response.end();
    });
};

var httpServer = http.createServer(staticServe);

httpServer.listen(8081);  
*/

// Stage 5
var fs = require('fs');  
var path = require('path');  
var http = require('http');

var staticBasePath = './';

var cache = {};

var staticServe = function(request, response) {  
    var fileLoc = path.resolve(staticBasePath);
    fileLoc = path.join(fileLoc, request.url);

        var stream = fs.createReadStream(fileLoc);

        // Handle non-existent file
        stream.on('error', function(error) {
            response.writeHead(404, 'Not Found');
            response.write('404: File Not Found!');
            response.end();
        });

        // File exists, stream it to user
        response.statusCode = 200;
        stream.pipe(response);
};

var httpServer = http.createServer(staticServe);

httpServer.listen(8081);

/*


// Declare a variable to hold the fs module
var filesystem = require('fs');

var path = require('path');  
var http = require('http');

var staticBasePath = './';

var staticServe = function(req, res) {  
    var fileLoc = path.resolve(staticBasePath);
    fileLoc = path.join(fileLoc, req.url);
console.log(fileLoc);
        var stream = filesystem.createReadStream(fileLoc);

        stream.on('error', function(error) {
            res.writeHead(404, 'Not Found');
            res.end();
        });

        stream.pipe(res);
};
var httpServer = http.createServer(staticServe);  
httpServer.listen(8081);  
console.log("Static file server running at\n  => http://localhost:" + 8081 + "/\nCTRL + C to shutdown");

/*

/*
var httpServer = http.createServer(staticServe);  
httpServer.listen(8081);  

var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs')
    port = process.argv[2] || 8081;

http.createServer(function(request, response) {

// Process.cwd() returns the current working directory
// The pathname property consists of the entire path section of the URL. This is everything 
// following the host (including the port) and before the start of the query or hash components, 
// delimited by either the ASCII question mark (?) or hash (#) characters.
  var uri = url.parse(request.url).pathname, filename = path.join(process.cwd(), uri);
  
  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
*/