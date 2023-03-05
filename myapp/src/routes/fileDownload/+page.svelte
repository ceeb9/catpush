<body>
    <div class="preview">
        <h1>PREVIEW</h1>
        <h2>No files listed</h2>
        <div class="buttons">
            <div class="pixelbutton"><a href="./downloadPage"> Back </a></div>
        </div>
    </div>
</body>

<style>
    body {
        background-color: #F6CBDC;
        font-family:'Shantell Sans', cursive;;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    .preview {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        border-radius: 30%;
        
            background: #000000;

            background-size: 50% 50%;
            background-repeat: no-repeat;
 
    }
    .buttons {
        margin: 150px;
        gap: 150px;
        display: flex;
        justify-content: center;
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
</style>