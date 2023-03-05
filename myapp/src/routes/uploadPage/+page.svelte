<body>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300&display=swap" rel="stylesheet">
    <p class='title'> UPLOAD </p>
    <p><label for="">You:</label></p>
    <textarea id="UserID" name="User ID" rows="0" cols="8"></textarea>
    
    <p><label for="">Receiver:</label></p>
    <textarea id="SenderID" name="Sender ID" rows="0" cols="8"></textarea>
    <p></p>
    <div class="pixelbutton"> <a href="./fileUpload"> Preview </a></div>
    <div class="pixelbutton"> <a href="./uploadCompletion"> Upload </a></div>
</body>

<style>
    body {
        background-color: #F6CBDC;
        font-family: 'Shantell Sans', cursive;
        text-align: center;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    .pixelbutton {
        font-size: 35px;
        color: white;
        height: auto;
        margin: 10px;
        font-family: 'VT323';
        
        position: relative;
        display: inline-block;
        vertical-align: top;
        text-transform: uppercase;
        
        cursor: pointer;
        
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .pixelbutton:active {
        top: 2px;
    }

    .pixelbutton {
        line-height: 0;
        
        image-rendering: optimizeSpeed;
        image-rendering: -moz-crisp-edges; /* Firefox */
        image-rendering: -o-crisp-edges; /* Opera */
        image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
        
        border-style: solid;
        border-width: 20px;
        -moz-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
        -webkit-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
        -o-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
        border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
    }

    .pixelbutton a {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: auto;
        text-align: center;
        margin: -20px -20px;
        line-height: 20px;
        padding: 10px 20px;
        
            background: #000000;

            background-size: 50% 50%;
            background-repeat: no-repeat;
            border-radius: 30%;
    }
</style>