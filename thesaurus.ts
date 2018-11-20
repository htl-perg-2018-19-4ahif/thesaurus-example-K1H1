let inputArguments: string[] = process.argv.slice(2);
let file: string = 'openthesaurus.txt'
let found: boolean = false;

import fs = require('fs');              //needed for reading in the file



var input: string[] = [];

//Write error message when there is no word-input
if (inputArguments.length === 0) {
    process.stdout.write("Please specify words!");
} else {
    //split out the words of the console input:
    for (let i = 0; i < inputArguments.length; i++) {
        input[i] = inputArguments[i];
        console.log(input[i]);

    }

    readFile();
    findSynonym(input);
}




//read in document bzw. line:
function readFile() {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) console.log(err);
        console.log('OK: ' + file);
        console.log(data)
    });



}

//look if synonym is in the list:
function findSynonym(input: string[]) {
    for (let i = 0; i < input.length; i++) {

    }



}

