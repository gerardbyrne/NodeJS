// Load the fs (filesystem) module.
var filesystem = require('fs');// 

// This directory will exist - we will create it in
// the same directory where this Javascript file is located
var path1 = "\TestDirectory";
filesystem.exists(path1, function(exists) {
     console.log("Test 1: Does the " + path1 + " Does the directory exist? " + exists);
});

// This directory will exist - we will create it in
// the same directory where this Javascript file is located
var path2 = "\chat";
filesystem.exists(path2, function(exists) 
{
	console.log("Test 2: Does the " + path2 + " directory exist? " + exists);
	// => false
}); 

// This file will exist we created it in last example
// Path and file are treated the same)
var path3 = "MainServerV4TextFile.txt";
filesystem.exists(path3, (exists) => {
  console.log("Test 3: Does the " + path3 + " file exist? " + exists);
});

// This directory will exist - we will create it in
// the directory one level up from where this Javascript file is located
var path4 = "../TestForNodeJS";
filesystem.exists(path4, (exists) => {
  console.log("Test 4: Does the " + path4 + " directory exist? " + exists);
}); 

// This file or directory will not exist
var path5 = "\Test";
filesystem.exists(path5, function(exists) 
{
	console.log("Test 5: Does the " + path5 + " directory exist? " + exists);
	// => true
});
