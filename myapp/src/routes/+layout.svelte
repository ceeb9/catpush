<nav>
    <div class="header">
        <div class="logo">
            <img src="./catlogobg.png" alt="cat logo">   
            <p> catpush </p>
        </div>
        <div class="about"> <a href="./about"> <p> about </p> </a> </div>
    </div>
</nav>

<style>
    p {
        font-size: 50px;
        font-family: 'VT323';
        font-weight: bolder;
    }

    nav {
        margin: 20px;
        margin-left: 45px;
        margin-right: 80px;
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
