var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.send('Hello fedsnspecialguestjake!');
});

app.listen(PORT, function () {
  console.log('My first express app listening on port 3000!');
});