<nav>
    <div class="header">
        <div class="logo">
            <img src="./catlogobg.png" alt="cat logo">   
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
        font-family: 'VT323';
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
