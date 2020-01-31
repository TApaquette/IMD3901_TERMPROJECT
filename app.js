const express   = require ('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);

const PORT = 8080;

app.use( express.static(__dirname + '/public'));

//routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});

server.listen(PORT);
console.log('Listening on port: ' + PORT);