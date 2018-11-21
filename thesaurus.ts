let file: string = 'openthesaurus.txt'
let inputArguments: string[] = process.argv.slice(2);

import fs = require('fs');              //needed for reading in the file




var input: string[] = [];

//Write error message when there is no word-input
if (inputArguments.length === 0) {
    process.stdout.write("Please specify words!");
} else {
    //split out the words of the console input:
    for (let i = 0; i < inputArguments.length; i++) {
        input[i] = inputArguments[i];
        process.stdout.write(input[i]);

    }
    findSynonym(input);
}


//look if synonym is in the list:
function findSynonym(input: string[]) {

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }

        let dataArray:string[]=data.split('\n');            //for finding synonyms

        //Check if the input word or a relative to the input word is in te file:
        for (let i = 0; i < input.length; i++) {
            if (!data.match(input[i])){
                process.stdout.write ("There were no Synonyms found!");
            }else{
                process.stdout.write('x+x+x+ '+ input[i].toUpperCase() + ' +x+x+x ');

                for(let j = 0; j<dataArray.length;j++){
                    if(dataArray[j].match(input[i])){
                        process.stdout.write(dataArray[j]+ '\n');
                    }
                }
            }
        }

    });




}

