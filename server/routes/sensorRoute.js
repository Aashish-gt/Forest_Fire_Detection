const express = require('express')
const { receiveData, getData } = require('../controller/sensorCtrl')
const { verifyToken, verifyTokenSimple } = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/receive', receiveData)

router.get('/data', getData)

module.exports = router