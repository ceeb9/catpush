<body>

    <div class="info">
        <p class="title"> What is catpush? </p>
        <p class="text"> Catpush is a simple and user friendly peer-to-peer filesharing service. 
            It was created as part of Unihack 2023 by a group of 5 in 48 hours. </p>
        <p class="text"> When sharing files, users would have to go through various middlemen. Google drive, email, etc. 
            Catpush completely removes that, allowing users to quickly share files to others with no hassle. </p>

    </div>
    <link href='https://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
    <div class="buttons">
        <div class="pixelbutton"><a href="./"> Return to Home </a></div>
    </div>

    <footer>
        <a href="https://github.com/ceeb9/catpush"> <img src="./githublogo.png" alt="github logo"> </a>
        <p> Github Repo </p>
    </footer>
</body>

<style>
    body {
        background-color: #F6CBDC;
        color: #232323;
        font-family: 'VT323';
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        padding-top: 50px;
    }

    footer img {
        height: 70px;
        width: auto;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 30px;
    }

    .text {
        width: 850px;
    }

    .title {
        font-size: 50px;
        font-weight: bolder;
    }

    .buttons {
            margin: 50px;
            display: flex;
            justify-content: center;
            width: 400px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
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
</style>