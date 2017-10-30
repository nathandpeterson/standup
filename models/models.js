const uuid = require('uuid')
const fs = require('fs')

function createTodo(data){
  const db = fs.readFileSync('../data.json', 'utf-8')
  const dbJSON = JSON.parse(db)
  data.id = uuid()
  console.log(dbJSON, data)
}

module.exports = {createTodo}
