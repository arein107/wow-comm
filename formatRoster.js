require("dotenv").config();

var fs = require('fs')

const path = require('path')

__dirname = (process.env.ROSTER_DIRECTORY)

const rosterPath = path.join(__dirname, '/roster.txt')

const readableStream = fs.createReadStream(rosterPath)

//turns roster.txt into an array with each line containing character name-server

const rosterArray = fs.readFileSync(rosterPath).toString('utf-8').toLowerCase().split("\r\n")




//converts the server name to slug form (removing ' basically)

async function toSlug(){


for(var i = 0; i < rosterArray.length; i++){


	rosterArray[i] = rosterArray[i].replace("'","")
}


return rosterArray;



}


//format to the slug

toSlug()




//splits each character so that their char name & server are two separate elements within its own array

const splitRosterArray = rosterArray.toString('utf-8').split(",").map(x => x.split("-"))



module.exports = {splitRosterArray};