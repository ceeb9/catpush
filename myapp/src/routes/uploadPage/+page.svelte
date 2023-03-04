<body>
    <link href='https://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
    <h1>UPLOAD</h1>
    <p><label for="">You:</label></p>
    <textarea id="UserID" name="User ID" rows="0" cols="8"></textarea>
    
    <p><label for="">Receiver:</label></p>
    <textarea id="SenderID" name="Sender ID" rows="0" cols="8"></textarea>
    <button onclick="location.href='/fileUpload';">Preview</button>
    <button onclick="location.href='/uploadCompletion';">Upload</button>
</body>

<style>
    body {
        background-color: pink;
    }
    p {
        color:pink;
        font-family:'Courier New', Courier, monospace;
        font-size: 2em;
    }
</style>