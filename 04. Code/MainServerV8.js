// Load the fs (filesystem) module.
var filesystem = require('fs');

var path = "\Test.txt";

// Use the fs.open() function to open the file
// We pass two values into the function and use them as required
filesystem.open(path, 'a', function opened(err, data)
 {
	if (err)
	{
	throw err
	}

// Set up a buffer to hold the data that is being written
	var writeBuffer = new Buffer(' - writing this string'),
	bufferPosition = 0;
	bufferLength = writeBuffer.length, filePosition = null;
	//filePosition = 0;

// Use the write function to write the data
	filesystem.write(data,writeBuffer,bufferPosition,bufferLength,filePosition,
				function wrote(err, written)
				{
				if (err)
				{
					throw err;
				}
				console.log('wrote ' + written + ' bytes');
				});
});
