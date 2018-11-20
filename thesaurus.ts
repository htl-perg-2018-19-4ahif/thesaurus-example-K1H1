let inputArguments: string[] = process.argv.slice(2);
let file: string = 'openthesaurus.txt'
let found: boolean = false;

import fs = require('fs');              //needed for reading in the file
import { stringify } from 'querystring';



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

}

//look if synonym is in the list:
function findSynonym(input: string[]) {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }

        //Check if the input word or a relative to the input word is in the file
        for (let i = 0; i < input.length; i++) {
            if (!data.match(input[i])){
                console.log ("There were no Synonyms found!");
            }else{
                console.log('yes');
            }



        }



    });




}

