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

    .buttons {
        margin: 200px;
        display: flex;
        justify-content: center;
    }

    button {
        background-color: #EA4C89;
        border-radius: 8px;
        border-style: none;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 20px;
        font-weight: 500;
        height: 50px;
        line-height: 20px;
        list-style: none;
        margin: 0;
        outline: none;
        padding: 10px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: color 100ms;
        vertical-align: baseline;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    button:hover,
    button:focus {
        background-color: #F082AC;
    }

</style>

<body>
    <h1>catPush</h1>
    <div class=".buttons">
        <button onclick="location.href='/uploadPage';">Upload</button>
        <button onclick="location.href='/downloadPage';">Download</button>
    </div>
</body>

<footer>
    <p>Visit <a href="https://github.com/ceeb9/catpush">CATPUSH</a> to see the repo</p>
</footer>
