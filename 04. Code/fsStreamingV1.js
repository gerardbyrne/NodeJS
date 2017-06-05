// Declare a variable to hold the fs module
var filesystem = require('fs');

var data = '';

// Call the createReadStream method from the fs module telling the method
// the name of the file, the encoding type 
// This code does exactly what the code in the first example does, except 
// that we have to "collect" chunks of data before printing it out to the console. 
// If the file is small then we will probably only ever receive a single chunk, 
// but for larger files, like audio and video, we will have to collect multiple chunks. 
// It is with large files that we start to notice the real value of streaming files.

var readStream = filesystem.createReadStream('fsBufferingV1.txt', 'utf8');

readStream.on('data', function(chunk) {  
    data += chunk;
}).on('end', function() {
    console.log(data);
});