const express = require('express')
const { showData } = require('../controller/dashboardCtrl')
const router = express.Router()

//fetch data in dashboard
router.get('/data', showData)

module.exports = router