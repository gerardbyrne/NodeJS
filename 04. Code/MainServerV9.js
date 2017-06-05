// Load the fs (filesystem) module.
var filesystem = require('fs');

var path = "\Test.txt";

// Set up a buffer to hold data
var buffertoholddata = new Buffer(1024);

console.log("Opening an existing file\n");

// Use the open function to open the text file
filesystem.open(path, 'r+', function(err, data) {
   if (err) 
   {
       return console.error(err);
   }
   console.log("File opened successfully!\n");
   console.log("Reading the file\n");
   filesystem.read(data, buffertoholddata, 0, buffertoholddata.length, 0, function(err, bytes)
   {
      if (err){
         console.log(err);
   }

      // Print only bytes that have been read.
      if(bytes > 0)
	  {
         console.log(buffertoholddata.slice(0, bytes).toString());
      }

      // Close the opened file.
      filesystem.close(data, function(err)
	  {
         if (err)
		 {
            console.log(err);
         } 
         console.log("\nFile closed successfully.");
      });
   });
});