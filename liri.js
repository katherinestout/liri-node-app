require("dotenv").config();

//import keys.js and store it in a variable
var keys = require ("./keys.js");
var fs = require ("fs");
//access twitter keys
//npm to access twitter api
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var spotify = require("spotify");
var spotify = new Spotify(keys.spotify);
var request = require ("request");
//var filename = "./random.txt";




//function to display last 20 tweets
function (myTweets) {

    //var params = {q:"@Katieskjdhfkaj", count: 20};
var params = {screen_name: 'KatieStoutStout'};

client.get('statuses/user_timeline', params, function(error, tweets, response)
{
    if (!error) {
        //loop through the tweets
   for (var i = 0; i < tweets.length; i++);{
       var date = tweets[i].created_at;
           //display the tweets
       console.log(tweets[i].text);
       //console.log("-----------------------");
   } }
});
}



//arguments array!





//switch case!

switch(command){
    case "my-tweets":
    myTweets();
    break;

    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;

    //what you get when you first go to command line:
default: 

console.log("Please enter a command! You can enter:" "my-tweets"  "spotify-this-song" "movie-this"  "do-what-it-says");
break;
}

//module.exports = "myTweets";