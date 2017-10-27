console.log('THIS IS THE MAIN FILE!!!!!!!!')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
const fs = require('fs')
const notes = './data.json'
const backup = './backup.json'

app.use(bodyParser.json())

app.disable('x-powered-by')

app.get('/notes', (req, res, next) => {
  const textData = fs.readFileSync(backup, 'utf-8')
  const data = JSON.parse(data)
  res.status(200).json(retrieve)
})

app.get('/notes/:id', (req, res, next) => {
  const textData = fs.readFileSync(backup, 'utf-8')
  const data = JSON.parse(data)
  if(!data.id === req.params.id) return {status: 400, message: 'no note found with that id'}
  res.json(data.id)
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
