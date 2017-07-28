var express = require('express');
var http = require('http')
var socketio = require('socket.io');
var mongojs = require('mongojs');

var ObjectID = mongojs.ObjectID;
var db = mongojs(process.env.MONGO_URL || 'mongodb://localhost:27017/local');
var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));
//
// Mapping objects to easily map sockets and users.
var clients = {};
var users = {};
var receiver = {};
var carrier = {};
var avatar = {};
// This represents a unique chatroom.
// For this example purpose, there is only one chatroom;


websocket.on('connection', (socket) => {
  clients[socket.id] = socket;
    socket.on('sendCarrierId', (carrierId) => saveSentCarrierId(carrierId))
    socket.on('sendReceiverId', (receiverId) => saveSentReceiverId(receiverId))
    socket.on('userJoined', (userId) => onUserJoined(userId, socket));
    socket.on('message', (message) => onMessageReceived(message, socket));
});
function saveSentCarrierId(carrierId){
  carrier[0] = carrierId;

}
function saveSentReceiverId(receiverId){
  receiver[0] = receiverId;

}


/*function makeId(socket){
}*/
// Event listeners.
// When a user joins the chatroom.
function onUserJoined(userId, socket) {
  try {
    // The userId is null for new users.
    if (!userId) {

      var user = db.collection('users').insert({}, (err, user) => {
        socket.emit('userJoined', user._id);
        users[socket.id] = user._id;
        _sendExistingMessages(socket);
      });
    } else {
      users[socket.id] = userId;
      _sendExistingMessages(socket);
    }
  } catch(err) {
    console.err(err);
  }
}

// When a user sends a message in the chatroom.
function onMessageReceived(message, senderSocket) {
  var userId = users[senderSocket.id];
  // Safety check.
  if (!userId) return;

  _sendAndSaveMessage(message);
}

// Helper functions.
// Send the pre-existing messages to the user that just joined.
function _sendExistingMessages(socket) {
  var messages = db.collection('messages')
    .find({'receiver':receiver[0], 'carrier':carrier[0]})
    .sort({ createdAt: 1 })
    .toArray((err, messages) => {
      // If there aren't any messages, then return.
      if (!messages.length) return;
      socket.emit('message', messages.reverse());
  });
}

// Save the message to the db and send all sockets but the sender.
function _sendAndSaveMessage(message,socket, fromServer) {
  var messageData = {
    text: message.text,
    user: message.user,
    createdAt: new Date(message.createdAt),
    receiver : receiver[0],
    carrier : carrier[0],
    avatar : avatar[0],
  };

  db.collection('messages').insert(messageData, (err, message) => {
    // If the message is from the server, then send to everyone.

  });
}
 //Allow the server to participate in the chatroom through stdin.
 var stdin = process.openStdin();
 stdin.addListener('data', function(d) {
   _sendAndSaveMessage({
    text: d.toString().trim(),
    createdAt: new Date(),
    user: { _id: 'bagspace' ,
    avatar: 'https://facebook.github.io/react/img/logo_og.png',},
    receiver: receiver[0],
    carrier: carrier[0],

  }, null ,true /* send from server */);
});

