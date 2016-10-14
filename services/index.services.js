exports.dictionaryServices = function(result) {
    var lib = require('./lib.services.js');
    var prompt = require('prompt');
    var dictionaryController = require('.././controllers/dictionary.controllers.js');
    var promise = [];

    if (result.Choice == 1) {
        var definitions = lib.Definitions;
        promise = [];
        promise.push(definitions.Definitions(result));
        Promise.all(promise).then(function() {
            dictionaryController.create();
        });
    } else if (result.Choice == 2) {
        var examples = lib.Examples;
        promise = [];
        promise.push(examples.Examples(result));
        Promise.all(promise).then(function() {
            dictionaryController.create();
        });
    } else if (result.Choice == 3) {
        var synonyms = lib.Synonyms;
        promise = [];
        promise.push(synonyms.Synonyms(result));
        Promise.all(promise).then(function() {
            dictionaryController.create();
        });
    } else if (result.Choice == 4) {
        var antonyms = lib.Antonyms;
        promise = [];
        promise.push(antonyms.Antonyms(result));
        Promise.all(promise).then(function() {
            dictionaryController.create();
        });
    } else if (result.Choice == 5) {
        var wordOfTheDay = lib.WordOfTheDay;
        promise = [];
        promise.push(wordOfTheDay.WordOfTheDay(result));
        Promise.all(promise).then(function() {
            dictionaryController.create();
        });
    } else if (result.Choice == 6) {
        var wordFullDictionary = lib.WordFullDictionary;
        wordFullDictionary.WordFullDictionary(result);
    }


    /*else if(result.Choice == 7){
		var wordGame = lib.WordGame;
    	wordGame.WordGame(result);
	}*/
    else if (result.Choice == "exit") {
        prompt.stop();
    }
}
