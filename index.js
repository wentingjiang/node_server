const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.join(__dirname, '/views')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())

app.get('/hello', (req, res) => {
	res.send('hello world')
})

app.listen(app.get('port'), function () {
	console.log(
		'Express started on http://localhost:' +
			app.get('port') +
			'; press Ctrl-C to terminate.',
	)
})