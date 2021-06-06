// App.js
let express = require('express'); // using express package
const { allowedNodeEnvironmentFlags } = require('process');
let app = express(); // creating express object
app.listen(3000, () => {
	console.log('Server is running');
});

/* Express GET */
// req : Information client to server; 보낸 정보
// res : Information server to client; 보낼 정보
app.get('/', (req, res) => {
	res.send('hello world!');
});

/* Express GET html */
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

/* Express use */
app.use(express.static('public'));

app.get('/', (req, res) => {
	// res.sendFile(__dirname + '/public/index.html'); -> 기존방식
	res.sendFile('index.html');
});

/* Express POST */
app.post('/post_result', (req, res) => {
	res.send(req.body);
});
