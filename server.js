var express = require('express');
var app = express();

var path = require('path');
var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

app.use(express.static(path.join(__dirname, 'build')));

//general public tweets (10) refresh to get new tweets
app.get('/generalSample', (req, res) => {

  var stream = T.stream('statuses/sample');

  var count = 10;
  var tweets = [];

  stream.on('tweet',(tweet) => {
    if(tweets.length < 10)
      tweets.push(tweet);
    else{
      res.send(tweets);
      stream.stop();
    };
  });
});

//search Twitter handles
app.get('/searchuser/:user/:count', (req,res) =>{

  var params = {
    q: req.params.user,
    count: parseInt(req.params.count)
  }

  var gotData = (err, data, response) => {
    res.send(data);
  }

  T.get('users/search', params , gotData);

});

//get tweets from specific Twitter Handle
app.get('/tweets/:user/:count', (req, res) => {
  var params = {
    screen_name: req.params.user,
    count: parseInt(req.params.count)
  }

  var gotData = (err, data, response) => {
    res.send(data);
  }

  T.get('statuses/user_timeline', params , gotData);

});

app.get('/tweetsq/:user/:q', (req, res) => {
  var params = {
    screen_name: req.params.user
  }
  var gotData = (err, data, response) => {
    var tweetsarr = Object.values(data);
    var filteredtweets = [];
    var query = req.params.q;
    var rgx = new RegExp(query.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&'), 'gi');

    for(var i = 0; i < tweetsarr.length; i++){
      if(rgx.test(tweetsarr[i].text)){
        filteredtweets.push(tweetsarr[i]);
      }
    }
    res.send(filteredtweets);
  }

  T.get('statuses/user_timeline', params , gotData);

});

app.listen(80);
console.log('Listening on port 80');
