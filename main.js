console.log('THIS IS THE MAIN FILE!!!!!!!!')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
const notes = new JSONMecha(path.join(__dirname, 'data.json'))

app.use(bodyParser.json())

app.disable('x-powered-by')

app.get('/notes/:id', (req, res, next) => {
  const data = notes.get()
  res.json(data)
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => console.log(`:) listening on port ${port}!!!!!!`)
app.listen(port, listener)
