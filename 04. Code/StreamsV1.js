// Load the fs (filesystem) module.
var filesystem = require('fs');

var readableStream = filesystem.createReadStream('StreamdataV1.txt');
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
