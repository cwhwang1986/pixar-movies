/* 
* @Author: ChalrieHwang
* @Date:   2015-08-03 23:44:07
* @Last Modified by:   ChalrieHwang
* @Last Modified time: 2015-08-04 00:36:39
*/

'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
app.use(express.static(__dirname + '/'));
app.get('/', function(req,res) {
	console.log(__dirname + '/index.html');
  res.sendfile(__dirname + '/index.html');
});
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Running at Port 3000");