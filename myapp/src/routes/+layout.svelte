<nav>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300&display=swap" rel="stylesheet">
    <div class="header">
        <link rel= "stylesheet" href="https://fonts.googleapis.com/css?family=Tilt+Neon">
        <div class="logo">
            <img src="./catlogo.svg" alt="cat logo">   
            <a href="./"> <p> catpush </p> </a>
        </div>
        <div class="about"> <a href="./about"> <p> about </p> </a> </div>
    </div>
</nav>

<style>
    * {
        background-color: #F6CBDC;
    }
    
    p {
        font-size: 50px;
        font-family:'Shantell Sans', cursive;;
        font-weight: bolder;
    }

    nav {
        padding: 20px;
        padding-left: 45px;
        padding-right: 80px;
        margin: 0;
    }

    img {
        height: 150px;
        width: auto;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .logo {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
</style>

<slot />
