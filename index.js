var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4000));

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(4000, function() {
  console.log('Server started at 4k');
});
