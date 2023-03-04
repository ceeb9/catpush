const express = require('express')
const http = require('http')
const WebSocket = require('ws')

const port = 8080;
const server = http.createServer(express)
const wss = new WebSocket.Server({server})

let clients = []
let rooms = []

//when there is a connection to the web socket server
wss.on('connection', function connection(ws, req) {
    
    //get the requested room from the client's ws server request string. eg. ws://localhost:8080/{room name}
    //add new room to list of rooms if it doesn't exist
    let currentRoom = req.url.substring(1)
    if (!rooms.includes(currentRoom)) {
        rooms.push(currentRoom)
    }

    //create a new client object
    clients.push(new Object({
        websocket: ws,
        room: currentRoom,
        host: rooms.includes(currentRoom) ? false : true,
    }))
    console.log("new connection to room " + currentRoom)

    //reply with info about the current room
    let clientsInRoom = 0
    clients.forEach(client => {
        if (client.room === currentRoom) {
            clientsInRoom++
        }
    })
    const msg = {
        type: "message",
        content: ("connected. there are currently " + clientsInRoom + " clients in room " + currentRoom)
    }
    ws.send(JSON.stringify(msg))

    //find clients in the room of the client sending the message
    ws.on('message', function incoming(data) {
        let parsedData = JSON.parse(data)

        if (parsedData.type === "message") {
            clients.forEach(client => {
                //if any known clients are in the same room as the message sender, send the message to them
                if (client.room === currentRoom) {
                    client.websocket.send(JSON.stringify(parsedData))
                }
            })
        }

        //if the client sends a closing message
        //remove them from the list of clients
        if (parsedData.type === "closing") {
            const index = clients.findIndex(x => x.websocket === ws)
            console.log("client disconnected from room " + clients[index].room)
            clients.splice(index, 1)
        }
        
    })
})

server.listen(port, function() {
    console.log('server is listening on', port)
})
