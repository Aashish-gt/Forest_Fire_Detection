const express = require('express')
const auth = require('../middlewares/authMiddleware')
const { saveToken, sendNotification } = require('../controller/notifyCtrl')
const router = express.Router()

router.post('/save-token', auth, saveToken)

router.post('/send', sendNotification)

module.exports = router
