<nav>
    <div class="header">
        <div class="logo">
            <img src="./catlogo.jpg" alt="cat logo">   
            <p> catpush </p>
        </div>
        <div class="about"> <p> about </p> </div>
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
        margin-left: 40px;
        margin-right: 40px;
    }

    img {
        height: 150px;
        width: auto;
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .logo {
        display: flex;
        justify-content: center;
        gap: 60px;
    }
</style>

<slot />
