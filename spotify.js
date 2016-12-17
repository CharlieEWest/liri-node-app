module.exports = function(keys){
  var spotify = require('spotify');
  var songSearch = process.argv[3];
  var songNames =[];
  var previewURLs = [];
  var albumNames=[];
  var artists=[[],[]];
  
  spotify.search({ type: 'track', query: songSearch}, function(err, data) {
    if ( err ) {
    console.log('Error occurred: ' + err);
    return;
    }
    debugger;
    // Get album name
    for (var i=0; i < data.tracks.items.length; i++) {
    songNames[i]=data.tracks.items[i].name;
    previewURLs[i]=data.tracks.items[i].preview_url;
    albumNames[i]=data.tracks.items[i].album.name;
    };
    // print song name
    console.log("Similar Song Names");
    songNames.forEach(function(value){
    console.log(value); 
    });
    // print preview link of song
    console.log("Preview URLs of the Songs");
    previewURLs.forEach(function(value){
    console.log(value); 
    });
     // print album songs
	console.log("Album Names");
    albumNames.forEach(function(value){
    console.log(value); 
    });
  });
}

// curl -X GET "https://api.spotify.com/v1/search?q=search&type=artist,song's,album," -H "Accept: application/json"
//
// Spotify
/// Client ID
// b1ac9eb2c737475a82357f638cb0f550

// Client Secret
//  7df3d6baa97e45eb8068660d2d1a9df5