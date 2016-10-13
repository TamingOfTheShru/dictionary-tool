exports.create = function() {
    var prompt = require('prompt'),
        chalk = require('chalk'),
        clear = require('clear');
    console.log('What would you like to do?' + '\n');
    console.log(chalk.green("1. Word Definition\n" + "2. Word Example\n" + "3. Word Synonym\n" + "4. Word Antonym\n" + "5. Word Of The Day\n" + "6. Word Full Dictionary\n" + "7. Word Game\n"));
    console.log(chalk.yellow("Type exit to exit the application!\n"));
    prompt.start();

    prompt.get(['Choice'], function(err, result) {
        if (err) {
            console.log(err);
        } else {
            var DictionaryIndex = require('.././services/index.services.js');
            DictionaryIndex.dictionaryServices(result);
        }
    });

};
