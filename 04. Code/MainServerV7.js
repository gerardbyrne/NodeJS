// Load the fs (filesystem) module.
var filesystem = require('fs');

var path = "\Test.txt";

// Use the fs.open() function to open the file
// We pass two values into the function and use them as required
filesystem.open(path, 'r', function opened(err, data) 
 {
	if (err) 
	{ 
	throw err 
	}
	
// Set up a buffer to hold the data that is read
	var readBuffer = new Buffer(1024),
	bufferOffset = 0,
	bufferLength = readBuffer.length,
	filePosition = 0;
	
// Use the read function to read the data
	filesystem.read(data,readBuffer,bufferOffset,bufferLength,filePosition,
				function read(err, readBytes) 
				{
				if (err) 
				{ 
					throw err; 
				}
				console.log('just read ' + readBytes + ' bytes');
				if (readBytes > 0) 
				{
				console.log(readBuffer.slice(0, readBytes));
				}
				});
});



