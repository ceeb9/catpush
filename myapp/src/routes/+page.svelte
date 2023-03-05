
<script>
    import { onMount } from 'svelte'; //uses mount to make sure page is loaded
    import { v4 as uuidv4 } from 'uuid'; //uses this import to generate random uuid
     //sets cookies with their name, value and expiry
     function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000)); //finds and sets time for cookie
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    //checks what the cookie is
    function getCookie(cname) {
        let UUID = cname + "="; //finds cookie
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(UUID) == 0) {
            return c.substring(UUID.length, c.length);
            }
        }
        return "";
    }
    function checkCookie() {
        let UUID = getCookie("UUID");
        if (UUID != "") { //checks if a cookie exists
            JSON.stringify(UUID);//placeholder
        } else {
            UUID = uuidv4(); //create random uuid
            if (UUID != "" && UUID != null) {
                setCookie("UUID", UUID, 365); //calls setcookie to create a cookie
            }
        }
        var jUUID = JSON.stringify(UUID);
        //fs.writeFile("store.json", jUUID);
    }
    onMount(() => {
        checkCookie();//if page is loaded, run function
    });
  </script>

    <style>
    body {
        background-color: #F6CBDC;
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
    }

    footer img {
        height: 100px;
        width: auto;
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

    .title {
        font-size: 48px;
        margin: 40px;
        font-family:'Shantell Sans', cursive;;
        display: flex;
        justify-content: center;
    }
</style>

<body>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300&display=swap" rel="stylesheet">
    <p class="title"> Welcome to catpush! </p>
    <p class="title">An effortless and quick way to share your file with others</p>

    <link href='https://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
    <div class="buttons">
        <div class="pixelbutton"><a href="./uploadPage"> Send </a></div>
        <div class="pixelbutton"><a href="./downloadPage"> Receive </a></div>
    </div>
</body>
<footer>
    <a href="https://github.com/ceeb9/catpush"> <img src="./githubsvg.svg" alt="github logo"> </a>
    <p> Github Repo </p>
</footer>