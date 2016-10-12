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
var dictionaryController = require('./controllers/dictionary.controllers.js');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Hello!', { horizontalLayout: 'full' })
  )
);
console.log('Welcome to Dictionary Tool!'+ '\n');
dictionaryController.create();