var chalk  = require('chalk'),
	clear  = require('clear'),
	CLI    = require('clui'),
	figlet = require('figlet'),
	express = require('express'),
	prompt = require('prompt'),
	co =  require('co'),
	program = require('commander'),
	request = require('superagent');

var app = express();
//var dictionary = require('./routes/dictionary.routes.js') //routes are defined here
var dictionaryController = require('./controllers/dictionary.controllers.js');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Hello!', { horizontalLayout: 'full' })
  )
);
console.log('Welcome to Dictionary Tool!'+ '\n'+ 'What would you like to do?'+'\n');
console.log(chalk.green("1. Word Definition"+'\n'+ "2. Word Example"+'\n'+ "3. Word Of The Day"+'\n'));

prompt.start();

prompt.get(['Choice'], function (err, result) {
  if (err) { 
  	return onErr(err); 
  }
  else{
      dictionaryController.create(result);
  }
});

function onErr(err) {
    console.log(err);
    return 1;
}
