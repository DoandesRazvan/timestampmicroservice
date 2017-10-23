const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('<p>An app that converts dates to unix code and viceversa. Try it out!</p> <code>http://localhost:3000/October%2023,%202017</code> <br> <code>http://localhost:3000/1508713200</code>')
});

app.get('/:id', (req, res) => {
	console.log(req.params.id);
	
	var unixDate = new Date(req.params.id)
	
	// converts to midnight (date starts at 22:00 for some reason)
	unixDate.setHours(2);
	
	unixDate = unixDate.getTime() / 1000
	
	res.json({
		'unix': unixDate,
		'natural': req.params.id
	});
})

app.listen(port)