var express =  require('express');
var app = express();

app.use(express.static('app'));

// serve the index page at /
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './app/index.html'));
});

var port = process.env.PORT || 5555;
var server = app.listen(port, function () {
  console.log('Listening on port ', server.address().port);
});
