// Let's get the first page up and running
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendfile('./views/index.html');
});

app.get('/example', function(req, res) {
	res.sendfile('./views/example.html');
});

app.get('/article', function(req, res) {
	res.sendfile('./views/article.html');
});



app.listen(3000);