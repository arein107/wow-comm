require("dotenv").config();

const formattedRoster = require("./formatRoster.js");

const BlizzAPI = require('blizzapi')


// const clientId = process.env.CLIENT_ID;

// const clientSecret = process.env.CLIENT_SECRET

const BnetApi = new BlizzAPI({

  region: 'us',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
})



//--------------------------------------------------------------------------------------------------------------------//
//							TEST VALUES 																			  //
//--------------------------------------------------------------------------------------------------------------------//

// var realmNameSlug = 'barthilas'

// var encodedCharacterName = 'beri'

// var character = `/profile/wow/character/`+realmNameSlug+'/'+ encodedCharacterName + '?namespace=profile-us'

//--------------------------------------------------------------------------------------------------------------------//




//queries the character against the blizz api and returns the time they last logged in, convert from unixepoch to zulu



async function characterQuery(){

	try{

	
	var character_query = await BnetApi.query(character);

	var lastLogged = character_query.last_login_timestamp

	//var formatDate = new Date(lastLogged)

	var charNameServer = character_query.name+"-"+character_query.realm.slug


	console.log(character_query.name,"-",character_query.realm.slug, "***", lastLogged)

	//console.log(character_query.name,"-",character_query.realm.slug, 'last logged in: ', formatDate)
	
} catch(e) {

	//when run as node wgemain.js 2>wgeSUS.txt, sends errors to text file 

	console.error(e)
}}


//traverses through splitRosterArray to query each character

for(i = 0; i < formattedRoster.splitRosterArray.length; i++){

	var encodedCharacterName = formattedRoster.splitRosterArray[i][0]

	var realmNameSlug = formattedRoster.splitRosterArray[i][1]

	var character = `/profile/wow/character/`+realmNameSlug+'/'+ encodedCharacterName + '?namespace=profile-us'

	characterQuery()

}
