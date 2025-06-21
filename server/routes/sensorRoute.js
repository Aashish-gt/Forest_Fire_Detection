const express = require('express')
const { receiveData, getData } = require('../controller/sensorCtrl')
const router = express.Router()

router.post('/receive', receiveData)

router.get('/data', getData)

router.post('/')

module.exports = router