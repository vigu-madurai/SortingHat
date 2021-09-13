var express = require("express");
var app     = express();
var path    = require("path");

var index = "/index.html";

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+index));
});

app.listen(3000);



console.log("Running at Port 3000");