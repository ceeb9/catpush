<style> 
    body {
        background-color: #F6CBDC;
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
            background:
                linear-gradient(135deg, transparent 10px, #000000 0) top left,
                linear-gradient(225deg, transparent 10px, #000000 0) top right,
                linear-gradient(315deg, transparent 10px, #000000 0) bottom right,
                linear-gradient(45deg,  transparent 10px, #000000 0) bottom left;
            background-size: 50% 50%;
            background-repeat: no-repeat;
            background-image:
                radial-gradient(circle at 0 0, rgba(204,0,0,0) 14px, #000000 15px),
                radial-gradient(circle at 100% 0, rgba(204,0,0,0) 14px, #000000 15px),
                radial-gradient(circle at 100% 100%, rgba(204,0,0,0) 14px, #000000 15px),
                radial-gradient(circle at 0 100%, rgba(204,0,0,0) 14px, #000000 15px);
    }

    .buttons {
        margin: 200px;
        gap: 150px;
        display: flex;
        justify-content: center;
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

</style>

<body>

    <link href='https://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
    <div class="buttons">
        <div class="pixelbutton"><a href="./uploadPage"> Upload </a></div>
        <div class="pixelbutton"><a href="./downloadPage"> Download </a></div>
    </div>
</body>

<footer>
    <p>Visit <a href="https://github.com/ceeb9/catpush">CATPUSH</a> to see the repo</p>
</footer>
