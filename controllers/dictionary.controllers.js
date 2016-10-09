exports.create = function(req, res) {
	console.log("controllers");
    var dictionaryServices = require('.././services/index.services.js');
    dictionaryServices(req,res);
};