"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputArguments = process.argv.slice(2);
var file = 'openthesaurus.txt';
var found = false;
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
        console.log(input[i]);
    }
    readFile();
    findSynonym(input);
}
//read in document bzw. line:
function readFile() {
}
//look if synonym is in the list:
function findSynonym(input) {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        for (var i = 0; i < input.length; i++) {
            if (!data.match(input[i])) {
                console.log("There were no Synonyms found!");
            }
            else {
                console.log('yes');
            }
        }
    });
}
