<nav>
    <div class="header">
        <div class="logo">
            <img src="./catlogo.jpg" alt="cat logo">   
        </div> 
        <div class="title">
            <p> catpush </p>
        </div>
    </div>

</nav>

<style>
    p {
        font-size: 64px;
        font-family: 'VT323';
        font-weight: bolder;
    }

    nav {
        margin: 20px;
    }

    img {
        height: 200px;
        width: auto;
    }

    .header {
        display: flex;
    }

    .title {
        display: flex;
        justify-content: center;
    }
</style>

<slot />
