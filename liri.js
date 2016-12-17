//  write code you'll need to grab data from keys.js
var keys = require("./keys.js");
var twitterData = require("./keys.js");
var spotifyData = require("./spotify.js");
var movie = require("./movie.js");
var whatItSays = require("./dowhatItSays.js")

var action = process.argv[2];

console.log(action);

switch(action){
case 'my-tweets' :
console.log("inside my tweets");
twitterData(keys);
break;
case 'spotify-this-song' :
console.log("Spotify my song");
spotifyData();
break;
case 'movie-this' :
console.log("Movie this");
movie();
break;
case 'do-what-it-says' :
console.log("do what it says");
whatItSays();
break;
}