"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file = 'openthesaurus.txt';
var inputArguments = process.argv.slice(2);
var fs = require("fs"); //needed for reading in the file
var input = [];
//Write error message when there is no word-input
if (inputArguments.length === 0) {
    process.stdout.write("Please specify words!");
}
else {
    //split out the words of the console input:
    for (var i = 0; i < inputArguments.length; i++) {
        input[i] = inputArguments[i];
        process.stdout.write(input[i]);
    }
    findSynonym(input);
}
//look if synonym is in the list:
function findSynonym(input) {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        var dataArray = data.split('\n'); //for finding synonyms
        //Check if the input word or a relative to the input word is in te file:
        for (var i = 0; i < input.length; i++) {
            if (!data.match(input[i])) {
                process.stdout.write("There were no Synonyms found!");
            }
            else {
                process.stdout.write('x+x+x+ ' + input[i].toUpperCase() + ' +x+x+x ');
                for (var j = 0; j < dataArray.length; j++) {
                    if (dataArray[j].match(input[i])) {
                        process.stdout.write(dataArray[j] + '\n');
                    }
                }
            }
        }
    });
}
