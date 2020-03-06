const express   = require ('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server); //hello I am new

const PORT = 8080;

app.use( express.static(__dirname + '/public'));

//routes
//routes
app.get('/color', function(req,res) {
    res.sendFile(__dirname + '/public/shapemaker.html');
});

app.get('/controller', function(req,res) {
    res.sendFile(__dirname + '/public/puzzleroom.html');
});

//websocket stuff
socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });

    //custom events
    socket.on('doneClicked', function(data) {
        console.log('the done button was clicked');
        socketIO.sockets.emit('generate_shape', data);
    });

    //in progress does not work yet
    socket.on('normalClicked', function(data) {
        console.log('the normal property button was clicked');
        socketIO.sockets.emit('set_normal', data);
    });

});


server.listen(PORT);
console.log('Listening on port: ' + PORT);