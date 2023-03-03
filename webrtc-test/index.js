'use strict';

let os = require("os");
let nodeStatic = require("node-static");
let http = require("http");
let socketIO = require("socket.io");

let fileServer = new(nodeStatic.Server)();
let app = http.createServer(function(req, res) {
    fileServer.serve(req, res);
}).listen(8080);

let io = socketIO.listen(app);
io.sockets.on("connection", function(socket) {

    //send server messages to client
    function log() {
        let array = ["Message from server:"];
        array.push.apply(array, arguments);
        socket.emit("log", array);
    }

    socket.on("message", function(message) {
        log("Client said: ", message);
        socket.broadcast.emit("message", message);
    });

    socket.on("create or join", function(room) {
        log("received request to create or join room " + room);

        let clientsInRoom = io.sockets.adapter.rooms[room];
        let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;

        log("Room " + room + " has " + numClients + " clients.");

        if(numClients === 0) {
            socket.join(room);
            log("Client ID " + socket.id + " created room " + room);
            socket.emit("created", room, socket.id);

        } else if (numClients === 1) {
            log("Client ID " + socket.id + " joined room " + room);
            io.sockets.in(room).emit("join", room);
            socket.join(room);
            socket.emit("joined", room, socket.id);
            io.sockets.in(room).emit("ready")
        } else {
            socket.emit("full", room);
        }
    });

    socket.on("ipaddr", function() {
        let ifaces = os.networkInterfaces();
        for (let dev in ifaces) {
            ifaces[dev].forEach(function(details) {
                if (details.family === "IPv4" && details.address !== "127.0.0.1") {
                    socket.emit("ipaddr", details.address);
                }
            })
        }
    });
})
