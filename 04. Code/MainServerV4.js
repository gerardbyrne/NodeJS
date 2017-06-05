// Load the fs (filesystem) module.
var filesystem = require('fs');//

// The readFile function Asynchronously reads the contents of the
// text file into memory. The callback is passed two arguments (err, logData),
// where logData is the contents of the file.
// The format of the readFile function is: fs.readFile(file[, options], callback)
// If no encoding is specified, then the raw buffer is returned.
// If options is a string, then it specifies the encoding.
// Example: fs.readFile('gerrylog.txt', 'utf8', callback);
// Any specified file descriptor has to support reading.
// If a file descriptor is specified as the file, it will not be closed automatically.

filesystem.readFile('MainServerV4TextFile.txt', function (err, logData) {

// If an error occurred, throwing it will display the exception and kill our app.
  if (err) throw err;

// logData is a Buffer so we will convert it to string.
   var text = logData.toString();

   var results = {};

// We will now seperate the file into records.
   var agentDetails = text.split('\n');

// We will now iterate the agent details, putting each record into a part variable.
// We will then take each record and get the agent type (second section of the record)
// We will then take each record and get the sales figure (third section of the record)
agentDetails.forEach(function(line)
{
    var record = line.split(' ');
	  console.log("Record - ",record);
    var agent = record[1];
	  console.log("Agent Type - ",agent);
    var count = parseInt(record[2]);

    // If the agent type is not existing set the sales figure
    // to zero for this agent type
    if(!results[agent])
    {
      results[agent] = 0;
    }

    // Accumulate the sales figure to give us an overall total
    // for this agent type
    results[agent] += parseInt(count);
  });

console.log(results);
  // { Gold-Agent: 250000, Silver-Agent: 200000, Bronze-Agent: 60000 }
});
