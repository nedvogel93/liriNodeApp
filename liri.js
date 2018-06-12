require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs'); //file system
var twitter = require('twitter');
var request = require('request');
var spotify = require('node-spotify-api');

var command = process.argv[2]
var input = process.argv[3]
if (command = "spotify-this-song")
spotify.search({ type: 'track', query: input }, function(err, data) {
if ( err ) {
console.log('Error occurred: ' + err);
return;}
 console.log(data);
})
else if (command = "movie-this")
{request("http://www.omdb.com/?t=star+wars&y=plot=short&apikey=trilogy", function (error, response, body)
{if (!error && response.statusCode === 200)
	{ console.log}(response)}
)}

	else if (command = "my-tweets"){ 
		function getMyTweets() {
		var client = new Twitter(twitterKeysFile.twitterKeys);
		var params = {q: '@NedVogel', count: 20};
		client.get('search/tweets', params, function(error, tweets, response) {
		 if (!error) {
		 for (var i = 0; i < tweets.statuses.length; i++) {
			  var tweetText = tweets.statuses[i].text;
				console.log("Tweet Text: " + tweetText);
					  var tweetCreationDate = tweets.statuses[i].created_at;
					  logOutput("Tweet Creation Date: " + tweetCreationDate);
				  }
			  } else {
				console.log(error);
			  }
			})
		}
	}
	else if(command = "do-what-it-says"){
		spotify.search({ type: 'track', query: "I Want It That Way" }, function(err, data) {
			if ( err ) {
			console.log('Error occurred: ' + err);
			return;}
			 console.log(data);
			})
	}
