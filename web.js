var express = require('express');
var Pusher = require('pusher');

var appId = process.env.PUSHER_APP_ID;
var key = process.env.PUSHER_APP_KEY;
var secret = process.env.PUSHER_APP_SECRET;
var allowedHost = process.env.ALLOWED_HOST;

var pusher = new Pusher( { appId: appId, key: key, secret: secret } );

var app = express( express.logger() );
app.use( express.bodyParser() );

var allowCrossDomain = function(req, res, next) {
    res.header( 'Access-Control-Allow-Origin', allowedHost );

    next();
};
app.use( allowCrossDomain );

app.post('/pusher/auth', function(request, response) {

	console.log(request.body);
  
  var channelName = request.body.channel_name;
  var socketId = request.body.socket_id;
  var user = JSON.parse( request.body.user );
  
  var channnelData;
  
  if(channelName.indexOf('private-') === 0) {
    channelData = null;
  }
  else if(channelName.indexOf('presence-') === 0) {
    channelData = {
      user_id: user.id,
      user_info: { displayName: user.displayName }
    };
  }
  else {
    response.end();
  }
  
  var auth = pusher.auth(socketId, channelName, channelData);
  console.log(auth);
  response.send(auth);
  
});

var port = process.env.PORT || 5000;
console.log( 'starting to listen on ' + port);
app.listen(port, function() {
  console.log("Listening on " + port);
});