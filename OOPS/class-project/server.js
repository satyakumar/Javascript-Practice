var express = require('express');
require('babel-register'); 
var app = express();
//var cors = require('cors');
var port = 4000;
app.use(express.static(__dirname));
app.listen(port,function() {
	console.log('Webserver has been started at the port: '+ port)
});