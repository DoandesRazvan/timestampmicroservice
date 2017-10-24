const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('<p>An app that converts dates to unix code and viceversa. Try it out!</p> <code>http://timestampfuzyon.herokuapp.com/October%2023,%202017</code> <br> <code>http://timestampfuzyon.herokuapp.com/1508706000</code>')
});

app.get('/:date', (req, res) => {
	var date = req.params.date;
	
	if (isNaN(date)) {
		var unixDate = new Date(date)

		unixDate = unixDate.getTime() / 1000;

		res.json({
			'unix': unixDate,
			'natural': date
		});
	} else {
		var normalDate = new Date(date * 1000);
		
		res.json({
			'unix': date,
			'natural': normalDate.toString()
		});
	}
})

app.listen(port);