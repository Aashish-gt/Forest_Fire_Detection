const express = require('express')
const { signUpController, loginController, registerToken } = require('../controller/authCtrl')
const { verifyToken, verifyTokenSimple } = require('../middlewares/authMiddleware')
const router = express.Router()

//signUp Route
router.post('/signup', signUpController)

//login Route
router.post('/login', loginController)

//register FCM token
// router.post('/register-token', verifyTokenSimple, registerToken)

module.exports = router