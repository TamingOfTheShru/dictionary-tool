module.exports.Examples = function (result){
 	var lib = require('./lib.services.js');
 	var prompt = require('prompt');
 	console.log("Please enter the word:");
 	prompt.start();
 	prompt.get(['Word'], function (err, result) {
	  	if (err) { 
	  	console.log(err); 
	  	}
	  	else{  
	  		examplesApi(result);
	  	}
	});  	 	
}

examplesApi = function(result){
	console.log("working");
	var lib = require('./lib.services.js');
	var prompt = require('prompt'), request = require("request"), chalk = require("chalk");
	var options = {
  		uri: 'http://api.wordnik.com/v4/word.json/'+ result.Word+ '/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key='+ lib.API_KEY,
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
  		else{ 
  			var respJson = JSON.parse(body);
  			var respData = respJson.examples;
  			for (var i=0; i< respData.length; i++){
  				var meaning = respData[i].text;
  				console.log(
					chalk.cyan((i+1)+":"+meaning +"\n")
				);
  			}
  		}
  	});
}

