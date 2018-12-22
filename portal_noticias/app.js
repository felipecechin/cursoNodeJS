var app = require('./config/server');
var msg = require('./mod_teste');

app.listen(3000, function() {
	console.log(msg());
});