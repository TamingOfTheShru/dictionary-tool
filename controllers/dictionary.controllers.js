exports.create = function(result) {
	console.log("controllers");
    var DictionaryServices = require('.././services/index.services.js');
    DictionaryServices.dictionaryServices(result);
};