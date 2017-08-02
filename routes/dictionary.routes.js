
var dictionary = require('.././controllers/dictionary.controllers.js');

module.exports = function(app) {
	console.log("Routes");
	app.post('/dictionary', dictionary.create);
}

