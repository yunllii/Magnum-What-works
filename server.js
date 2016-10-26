//A way to import the module that you are using 
var express = require('express');


var app1 = express();

var server1 = app1.listen(8080);

var app2 = express();

var server2 = app2.listen(8000);


app1.use(express.static('projection'));
app2.use(express.static('touchscreen'));

console.log("My socket server is running");
// import the socket.io module
var socket = require('socket.io');
//io input/output
var io2 = socket(server2);
//
io2.sockets.on('connection',newConnection);

function newConnection(socket){
	console.log('new connection: ' + socket.id);
	
	socket.on ('mouse', mouseMsg);
	
	function mouseMsg(data){
		//in this way, message would only goes to clients other than oneself
		socket.broadcast.emit('mouse',data);
		//But if written in this way, message could be received by myself too
		//io.sockets.emit('mouse',data);
		console.log(data);
		
	};
}

