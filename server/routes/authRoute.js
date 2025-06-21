const express = require('express')
const { signUpController, loginController } = require('../controller/authCtrl')
const router = express.Router()

//signUp Route
router.post('/signup', signUpController)

//login Route
router.post('/login', loginController)

module.exports = router