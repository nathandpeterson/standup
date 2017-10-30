const express = require('express')
const router = express.Router()
const ctrl = require('../controller/control.js')

router.post('/notes', ctrl.createTodo)

module.exports = {router}
