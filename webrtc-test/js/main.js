'use strict';

var isInitiator;

window.room = prompt("enter room name");

var socket = io.connect();

if (room !== "") {
    console.log("client is asking to join room: ", room);
    socket.emit("create or join", room);
}

socket.on("created", function(room, clientId) {
    isInitiator = true;
});

socket.on("full", function(room, clientId) {
    console.log("room ", room, " is full");
});

socket.on("ipaddr", function(ipaddr) {
    console.log("message from client: server ip address is: ", ipaddr);
});

socket.on("joined", function(room, clientId) {
    isInitiator = false;
});

socket.on("log", function(array) {
    console.log.apply(console, array);
});
