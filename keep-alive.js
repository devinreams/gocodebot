var http = require('http');

var server = http.createServer(function(req, res){
  res.end('up');
});

var port = process.env.PORT || 3000;
server.listen(port, function(){
    console.log("Server listening on: http://localhost:", port);
});

var http = require("http");
setInterval(function() {
    http.get("http://gocodebot.herokuapp.com");
}, 300000); // every 5 minutes
