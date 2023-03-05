(function () {
    
    const room = prompt("room?")
    const sendButton = document.querySelector('#sendButton')
    const messages = document.querySelector('#messages')
    const fileChooser = document.querySelector('#fileChooser')
    const fileList = document.querySelector('#fileList')

    let ws;
    function showMessage(message) {
        let parsedData = JSON.parse(message)
        console.log("received message from server: " + message)

        //add file to filelist table
        if (parsedData.type === "fileselected") {
            var row = fileList.insertRow(0)
            var typecell = row.insertCell(0)
            var namecell = row.insertCell(1)
            var sizecell = row.insertCell(2)
            var dlcell = row.insertCell(3)
            var dlElement = document.createElement('button')
            dlElement.disabled = true
            dlElement.innerText = "download"

            typecell.innerHTML = parsedData.filetype
            namecell.innerHTML = parsedData.filename
            sizecell.innerHTML = parsedData.filesize
            dlcell.appendChild(dlElement)
        } 
        //give feedback that the user has connected
        //disable upload if they are a client
        else if (parsedData.type === "connected") {
            amihost = parsedData.ishost
            messages.textContent += `\n\nyou've connected to room \"${parsedData.room}\" as a ${parsedData.ishost ? "host" : "client"}. there are ${parsedData.roompopulation - 1} other people in this room.`
            messages.scrollTop = messages.scrollHeight
            if (parsedData.ishost === false) {
                fileChooser.disabled = true
                sendButton.disabled = true
                fileChooser.style = "display: none;"
                sendButton.style = "display: none;"
            }
        }
        //notify user that another client has joined their room
        //this should only be received if this user is a host
        else if (parsedData.type === "clientjoined") {
            console.log('client joined')
            messages.textContent += `\n\na new client has joined your room! there are now ${parsedData.roompopulation} people in this room.`
        }
        //on receiving files
        else if (parsedData.type === "sendfiles") {

            //gives us a promise with the file object
            let file = (fetch(parsedData.files)
                .then(function(res){return res.arrayBuffer();})
                .then(function(buf){return new File([buf], parsedData.filename, {type:parsedData.filetype});}))
            
            //when the promise is fulfilled
            file.then((value) => {
                console.log(value)
                messages.textContent += `\n\nReceived file ${value.name}!`

                for (const row of fileList.rows) {
                    for (const cell of row.cells) {
                        if (cell.innerText === value.name) {
                            console.log(cell.innerText)
                            const dlButton = row.cells[row.cells.length-1].children[0]
                            dlButton.disabled = false
                            dlButton.addEventListener('click', () => {
                                window.open(URL.createObjectURL(value), '_blank')
                            })
                        }
                    }
                }
            })
        }
        //default message type behaviour
        else if (parsedData.type === "message") {
            messages.textContent += `\n\n${parsedData.content}`
        }
    }

    function init() {
        //create a new websocket and connect to the websocket server
        ws = new WebSocket(`ws://localhost:8080/${room}`)
        
        if (!ws) {
            ws.onerror = ws.open = ws.onclose = null
            ws.close()
        }
        
        //send files
        sendButton.onclick = function() {
            if (fileChooser.files.length === 0) {
                showMessage(JSON.stringify({
                    type: "message",
                    content: "select some files first!"
                }))
            } 
            else {
                const reader = new FileReader()
                reader.onload = function () {
                    console.log('filereader loaded')
                    let msg = {
                        type: "sendfiles",
                        filename: fileChooser.files[0].name,
                        filetype: fileChooser.files[0].type,
                        files: reader.result
                    }
                    ws.send(JSON.stringify(msg))
                }
                reader.readAsDataURL(fileChooser.files[0])
            }
            
        }

        //send info about files being selected when filechooser sends a change event
        fileChooser.addEventListener('change', (event) => {
            console.log('files changed')
            const msg = {
                type: "fileselected",
                filename: fileChooser.files[fileChooser.files.length-1].name,
                filesize: fileChooser.files[fileChooser.files.length-1].size,
                filetype: fileChooser.files[fileChooser.files.length-1].type,
            }
            ws.send(JSON.stringify(msg))
        })

        // when receiving a message, run showMessage()
        ws.onmessage = ({data}) => showMessage(data)
        
        //runs when connection is closed
        window.addEventListener('beforeunload', (event) => {
            ws.send(JSON.stringify({type: "closing"}))
            event.returnValue = '';
        })
    }

    init()
})();
