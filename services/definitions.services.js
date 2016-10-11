module.exports.Definitions = function (result){
	var prompt = require('prompt');
 	var lib = require('./lib.services.js');
 	var examples = require('./examples.services.js');
 	console.log("Please enter the word:");
 	prompt.start();
 	prompt.get(['Word'], function (err, result) {
	  	if (err) { 
	  	console.log(err); 
	  	}
	  	else{  
	  		definitionsApi(result);
	  	}
	});  	 	
}

definitionsApi = function(result){
	var lib = require('./lib.services.js');
	var prompt = require('prompt'), request = require("request"), chalk = require("chalk");
	var options = {
		uri: 'http://api.wordnik.com/v4/word.json/'+ result.Word + '/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=' + lib.API_KEY,
		port : 80,
		method : 'GET',
		headers: {
      		"Content-Type":"application/json; charset=utf-8"
  		}
	}
	var req = request(options, function(err, res, body) {
		if(err) {
			console.log("error:");
			console.log(err);
		}
		else{ var respJson = JSON.parse(body);
			for (var i=0; i< respJson.length; i++){
				var meaning = respJson[i].text;
				console.log(
				chalk.cyan((i+1)+":"+meaning +"\n")
			);
			}
		}
	});
}