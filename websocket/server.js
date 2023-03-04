const express = require('express')
const http = require('http')
const WebSocket = require('ws')

const port = 8080;
const server = http.createServer(express)
const wss = new WebSocket.Server({server})

//when there is a connection to the web socket server
wss.on('connection', function connection(ws) {
    console.log('got connection')
    //we wait until there is a message from the connecting websocket
    ws.on('message', function incoming(data) {
        //then we iterate through clients
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data)
            }
        })
    })
})

server.listen(port, function() {
    console.log('server is listening on', port)
})
