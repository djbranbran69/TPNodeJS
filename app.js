var CONFIG = require("./config.json"); 
process.env.CONFIG = JSON.stringify(CONFIG);
var http = require("http");
var CONFIG = require("./config.json");

var express = require("express");
var app = express();

// init server
var server = http.createServer(app); 
server.listen(CONFIG.port);
