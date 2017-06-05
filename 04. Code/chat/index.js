var myPort = 8081;
var express = require("express");
var app = express();

app.get("/", function(req, res) {
        res.send("It works!");
    });

app.listen(myPort);
console.log("Listening on port "+myPort);

