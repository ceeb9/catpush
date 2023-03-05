const express = require('express')
const http = require('http')
const WebSocket = require('ws')

const port = 8080;
const server = http.createServer(express)
const wss = new WebSocket.Server({server})

let clients = []
let roomPopulations = {}

//when there is a connection to the web socket server
wss.on('connection', function connection(ws, req) {
    
    //get the requested room from the client's ws server request string. eg. ws://localhost:8080/{room name}
    //add new room to list of rooms if it doesn't exist, and make the connecting user a host
    let currentRoom = req.url.substring(1)
    let host
    if (!(currentRoom in roomPopulations)) {
        console.log("creating new room " + currentRoom)
        roomPopulations[currentRoom] = 1
        host = true
    } else {
        roomPopulations[currentRoom] += 1
        host = false
    }

    //create a new client object
    //make client the room host if the population of the room is 1
    clients.push(new Object({
        websocket: ws,
        room: currentRoom,
        ishost: host,
    }))
    console.log("new connection to room " + currentRoom)

    //reply to connecting user with info about the current room
    let msg = {
        type: "connected",
        room: currentRoom,
        ishost: host,
        roompopulation: roomPopulations[currentRoom],
    }
    ws.send(JSON.stringify(msg))

    //tell other users that someone has joined
    clients.forEach(client => {
        //notify others in their room
        if (client.room === currentRoom && client.ishost === true && roomPopulations[currentRoom] > 1) {
            msg = {
                type: "clientjoined",
                ishost: client.ishost,
                roompopulation: roomPopulations[currentRoom]
            }
            client.websocket.send(JSON.stringify(msg))
        }
    })

    //find clients in the room of the client sending the message
    ws.on('message', function incoming(data) {
        let parsedData = JSON.parse(data)

        //if the host selects files to send
        //send the metadata to clients in their room
        if (parsedData.type === "fileselected") {
            clients.forEach(client => {
                //notify others in their room
                if (client.room === currentRoom) {
                    client.websocket.send(JSON.stringify(parsedData))
                }
            })
        }

        //if the host sends files
        if (parsedData.type === "sendfiles") {
            clients.forEach(client => {
                //send to clients in their room
                if (client.room === currentRoom && client.ishost === false) {
                    client.websocket.send(JSON.stringify(parsedData))
                }
            })
        }

        //if a user sends a closing message
        else if (parsedData.type === "closing") {
            const index = clients.findIndex(x => x.websocket === ws)
            console.log("client index " + index + " is disconnecting")

            //remove the room listing of their room if its population has become 1 
            //(just them, who is about to leave)
            console.log("client disconnecting from room " + clients[index].room + ", " + (roomPopulations[clients[index].room]-1).toString() + " people left in that room.")
            if (roomPopulations[clients[index].room] === 1) {
                delete roomPopulations[clients[index].room]
                console.log("deleted room " + currentRoom + ".")
            } else {
                roomPopulations[clients[index].room] -= 1
            }
            
            clients.splice(index, 1)
        }
        
    })
})

server.listen(port, function() {
    console.log('server is listening on', port)
})
