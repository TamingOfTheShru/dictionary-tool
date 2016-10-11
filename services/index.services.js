exports.dictionaryServices = function(result){
	var lib = require('./lib.services.js');

	if(result.Choice == 1){
		var definitions = lib.Definitions;
    	definitions.Definitions(result);
	}
	else if(result.Choice == 2){
		var examples = lib.Examples;
    	examples.Examples(result);
	}
	else if(result.Choice == 3){
		var wordOfTheDay = lib.WordOfTheDay;
    	wordOfTheDay.WordOfTheDay(result);
	}		
}