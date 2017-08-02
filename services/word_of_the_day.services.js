module.exports.WordOfTheDay = function(result) {
    var prompt = require('prompt');
    var lib = require('./lib.services.js');
    var deferred = lib.Q.defer();
    console.log("Please enter the date (yyyy-mm-dd):");
    prompt.start();
    prompt.get(['Date'], function(err, result) {
        if (err) {
            console.log(err);
        } else {
            wordOfTheDayApi(result, deferred);
        }
    });
    return deferred.promise;
}

module.exports.wordOfTheDayApi = wordOfTheDayApi;

function wordOfTheDayApi(result, deferred) {
    var lib = require('./lib.services.js');
    var prompt = require('prompt'),
        request = require("request"),
        chalk = require("chalk");
    var options = {
        uri: 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?date=' + result.Date + '&api_key=' + lib.API_KEY,
        port: 80,
        method: 'GET',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }
    var req = request(options, function(err, res, body) {
        if (err) {
            console.log("error:");
            console.log(err);
        } else {
            var respJson = JSON.parse(body);
            console.log(
                chalk.cyan("The word for the day is:" + respJson.word)
            );
            console.log(
                chalk.red("Definitions:\n")
            );
            var respDeifinitions = respJson.definitions;
            for (var i = 0; i < respDeifinitions.length; i++) {
                var definitons = respDeifinitions[i].text;
                console.log(
                    chalk.cyan((i + 1) + ":" + definitons + "\n")
                );
            }
            var respExamples = respJson.examples;
            console.log(
                chalk.red("Example Usage:\n")
            );
            for (var i = 0; i < respExamples.length; i++) {
                var examples = respExamples[i].text;
                console.log(
                    chalk.cyan((i + 1) + ":" + examples + "\n")
                );
            }
        }
        deferred.resolve("wordOfTheDay");
    });
    return deferred.promise;
}
