require("dotenv").config();

var fs = require('fs')

const path = require('path')

const util = require('util')

const readline = require('readline');

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

__dirname = (process.env.ROSTER_DIRECTORY)

const sortedPath = path.join(__dirname, '/success.txt')

const readableStream = fs.createReadStream(sortedPath)

var successArray = fs.readFileSync(sortedPath).toString().split("\n")



var splitSuccessArray = successArray.toString('utf-8').split(",").map(x => x.split("***"))


userInput.question('alphabetically [1], by date [2], or magical [3] ? ', (choice) => {

	let num = choice;

	if (choice == 1){

  		splitSuccessArray.sort(function(a, b) {

    		var textA = a[0]
    		var textB = b[0]
    		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});

		//converts the last logged in date into a 'date' format
		for(i=0; i < splitSuccessArray.length; i++){

			splitSuccessArray[i][1] =  new Date(splitSuccessArray[i][1]*1)}


		//formats the final text (and formats the date into a human readible form)
		for( i=0; i < splitSuccessArray.length; i++){

			var charName = splitSuccessArray[i][0]
			var dateLog = splitSuccessArray[i][1]

			formatDate = dateLog.toLocaleString()

			console.log(charName,"last logged in: ",formatDate)
		}


  	}

	else if (choice == 2 ){


		splitSuccessArray.sort(function(a,b) {

    	return a[1]-b[1]

	});


		//converts the last logged in date into a 'date' format
		for(i=0; i < splitSuccessArray.length; i++){

			splitSuccessArray[i][1] =  new Date(splitSuccessArray[i][1]*1)}


		//formats the final text (and formats the date into a human readible form)
		for( i=0; i < splitSuccessArray.length; i++){

			var charName = splitSuccessArray[i][0]
			var dateLog = splitSuccessArray[i][1]

			formatDate = dateLog.toLocaleString()

			console.log(charName,"last logged in: ",formatDate)
		}

 	 }

 	else if (choice == 3){

		splitSuccessArray.sort(function(a,b) {

    	return a[1]-b[1]

	});

		//the first 100 items of the array

		const n = 100

		const newSplitSuccessArray = splitSuccessArray.slice(0,n)

		 newSplitSuccessArray.sort(function(a, b) {

    		var textA = a[0]
    		var textB = b[0]
    		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});

		//converts the last logged in date into a 'date' format
		for(i=0; i < newSplitSuccessArray.length; i++){

			newSplitSuccessArray[i][1] =  new Date(newSplitSuccessArray[i][1]*1)}


		//formats the final text (and formats the date into a human readible form)
		for( i=0; i < newSplitSuccessArray.length; i++){

			var charName = newSplitSuccessArray[i][0]
			var dateLog = newSplitSuccessArray[i][1]

			formatDate = dateLog.toLocaleString()

			console.log(charName,"last logged in: ",formatDate)
		}

 	}

	else {

  	console.log("must be [1],[2], or [3]")}

  userInput.close();

});

