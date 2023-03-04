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
    p {
        color:pink;
        font-family:'Courier New', Courier, monospace;
        font-size: 2em;
    }
    h1 {
        text-align: center;
    }
    body {
        background-color: pink;
    }
</style>

<body>
    <h1>catPush</h1>
    <button onclick="location.href='/uploadPage';">Upload</button>
    <button onclick="location.href='/downloadPage';">Download</button>
</body>

<footer>
    <p>Visit <a href="https://github.com/ceeb9/catpush">CATPUSH</a> to see the repo</p>
</footer>
