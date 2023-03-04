(function () {
    
    const room = prompt("room?")
    const sendButton = document.querySelector('#send')
    const messages = document.querySelector('#messages')
    const messageBox = document.querySelector('#messageBox')

    let ws;
    function showMessage(message) {
        console.log(message)
        messages.textContent += `\n\n${message}`
        messages.scrollTop = messages.scrollHeight
        messageBox.value = ''
    }

    function init() {
        //create a new websocket and connect to the websocket server
        ws = new WebSocket(`ws://localhost:8080/${room}`)
        
        if (!ws) {
            ws.onerror = ws.open = ws.onclose = null
            ws.close()
        }

        //runs when connection is closed
        window.addEventListener('beforeunload', (event) => {
            ws.send(JSON.stringify({type: "closing"}))
            event.returnValue = '';
        })
        
        // when receiving a message, run showMessage()
        // the value we pass into showMessage() is the value of the promise of the blob object that was received.
        ws.onmessage = ({data}) => showMessage(JSON.parse(data).content)

        //clicking this button tells the server:
        //hello, i would like to send data to others in my room
        sendButton.onclick = function() {
            if (!ws) {
                showMessage("no websocket connection")
                return
            }

            //server will determine what clients to send this to based on their room
            const msg = {
                type: "message",
                content: messageBox.value
            }
            ws.send(JSON.stringify(msg))
        }
    }

    init()
})();

console.log("hi")
