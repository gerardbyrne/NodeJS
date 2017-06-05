// Load the fs (filesystem) module.
var filesystem = require('fs');

var path = "StreamdataV3.txt";

// Creating a writable stream
// var readableStream = filesystem.createReadStream(path);
var readableStream = filesystem.createReadStream(path, {start: 8});
var data = '';


// Stream will be a buffer object as we have not 
// specified an encoding
readableStream.on('data', function(chunk) 
{
    data +=chunk;
});

readableStream.on('end', function() 
{
    console.log(data);
});