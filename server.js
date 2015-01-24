// Let's get the first page up and running
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
	res.send('./views/index.html');
});

app.get('/bop', function(req, res) {
	res.render('bop.html');
});

app.get('/open_source', function(req, res) {
	res.render('os.html');
});

app.listen(app.get('port'), function() {
console.log("Node app is running at localhost:" + app.get('port'));
});

