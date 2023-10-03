const express = require('express')
const {register, login, logout} = require("../controller/auth")
const getUser = require('../controller/user')
const router = express.Router()

//register
router.post('/register', register)
router.post('/login',login)
router.get('/logout', logout)

module.exports = router