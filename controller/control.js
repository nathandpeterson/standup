const models = require('../models/models.js')

function createTodo(data){
  console.log(req.body)
  const data = models.createTodo(req.body)
  res.status(201).json(data)
}


module.exports = {createTodo}
