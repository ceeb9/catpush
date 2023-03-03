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

<script>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<body>
<h1>catPush</h1>
<p>Visit <a href="https://github.com/ceeb9/catpush">CATPUSH</a> to see the repo</p>




<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<footer> Currently, the button has been clicked {count} time(s)</footer>
</body>