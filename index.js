const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.join(__dirname, '/views')))
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: false }))

app.get('/hello', (req, res) => {
	res.send('hello world')
})

app.post('/testPostJson', (req, res)=>{
	console.log(req.query)
	let obj = req.body
	console.log(obj.a)
	res.send('testPostJson')
})

app.listen(app.get('port'), function () {
	console.log(
		'Express started on http://localhost:' +
			app.get('port') +
			'; press Ctrl-C to terminate.',
	)
})