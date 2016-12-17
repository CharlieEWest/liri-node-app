module.exports = function(keys){
  var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: 'TzqsiaVEe2vejM6g236SkJU3s',
	consumer_secret: 'n8adDE6RUmWvUfFWXURXhXVdTsPMeUw5V6nu2bn2CrLa0TvPcp',
	access_token_key: '344111167-rVwFg7ECHI5NjklTPoEBZQ4alEB3LyNM0HPw1bWb',
	access_token_secret: 'iprwoK6ppwDiQs4PpYmjWIr87FGfJlQsPY167lF2Y7nYF',
});

var params = {screen_name: 'nodejs'};
  debugger;
  client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
  console.log("Do I have any tweets??");
  console.log(tweets);
  } else {
  console.log(error);
  }
  });
}

//var client = new Twitter({
//	consumer_key: '',
//	consumer_secret: '',
//	access_token_key: '',
//	access_token_secret: '',
//});