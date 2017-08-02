module.exports.WordFullDictionary = function(result) {
    var prompt = require('prompt');
    var lib = require('./lib.services.js'),
        Synonyms = require('./synonyms.services.js'),
        Antonyms = require('./antonyms.services.js'),
        Definitions = require('./definitions.services.js'),
        Examples = require('./examples.services.js');
    var dictionaryController = require('.././controllers/dictionary.controllers.js');
    console.log("Please enter the word:");
    prompt.start();
    prompt.get(['Word'], function(err, result) {
        if (err) {
            console.log(err);
        } else {
            var promise = [];

            promise.push(Definitions.definitionsApi(result, lib.Q.defer()));

            promise.push(Examples.examplesApi(result, lib.Q.defer()));

            promise.push(Synonyms.synonymsApi(result, lib.Q.defer()));

            promise.push(Antonyms.antonymsApi(result, lib.Q.defer()));
            Promise.all(promise).then(function(variable) {
                dictionaryController.create();
            });
        }
    });
}
