exports.dictionaryServices = function(result){
	var lib = require('./lib.services.js');
	var prompt = require('prompt');

	if(result.Choice == 1){
		var definitions = lib.Definitions;
    	definitions.Definitions(result);
	}
	else if(result.Choice == 2){
		var examples = lib.Examples;
    	examples.Examples(result);
	}
	else if(result.Choice == 3){
		var synonyms = lib.Synonyms;
    	synonyms.Synonyms(result);
	}
	else if(result.Choice == 4){
		var antonyms = lib.Antonyms;
    	antonyms.Antonyms(result);
	}
	else if(result.Choice == 5){
		var  wordFullDictionary = lib.WordFullDictionary;
    	wordFullDictionary.WordFullDictionary(result);
	}
	else if(result.Choice == 6){
		var wordOfTheDay = lib.WordOfTheDay;
    	wordOfTheDay.WordOfTheDay(result);
	}
	
	/*else if(result.Choice == 6){
		var wordGame = lib.WordGame;
    	wordGame.WordGame(result);
	}*/

	else if(result.Choice == "exit"){
		prompt.stop();
	}	
}