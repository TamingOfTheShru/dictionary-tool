exports.dictionaryServices = function(result){
	var lib = require('./lib.services.js');
	console.log(result.Choice);
	if(result.Choice == 1){
		var definitions = lib.Definitions;
		console.log(definitions);
    	definitions.Definitions(result);
	}
	
}