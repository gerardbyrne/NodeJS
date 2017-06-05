// Load the fs (filesystem) module.
var filesystem = require('fs');

var path = "/TestForNodeJS";

// Use the fs.stat () function to get the file or directory statistics. We pass two values into
// the function and use them as required
filesystem.stat(path, function(error, statistics) {
if(error)
{
throw error;
}   
// Display the statistics 
console.log(statistics);

if	(statistics.isFile())
{
console.log("It is a file");
}

if	(statistics.isDirectory())
{
console.log("It is a Directory");
}

});

