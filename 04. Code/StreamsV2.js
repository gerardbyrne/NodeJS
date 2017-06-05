// Load the fs (filesystem) module.
var filesystem = require('fs');

var readableStream = filesystem.createReadStream('StreamdataV1.txt');
var data = '';

// Specify the encoding as UTF8
// The Unicode Standard has become a success and is implemented 
// in HTML, XML, Java, JavaScript, E-mail, ASP, PHP, etc. 
// The Unicode standard is also supported in many operating systems 
// and all modern browsers.
readableStream.setEncoding('utf8');

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

// When the file ends the stream emits an end event 
readableStream.on('end', function() 
{
console.log('the stream has ended');
});
