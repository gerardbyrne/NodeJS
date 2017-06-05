// Load the fs (filesystem) module.
	var filesystem = require('fs');

	var pathread = "StreamdataV3.txt";
	var pathwrite = "StreamdataV5.txt";

// Creating a readable stream
	var readableStream = filesystem.createReadStream(pathread);

// Creating a writable stream
	var writeableStream = filesystem.createWriteStream(pathwrite);
	var data = '';

	readableStream.pipe(writeableStream);


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