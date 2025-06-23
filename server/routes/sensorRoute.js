const express = require('express');
const { receiveData, getData, getLatestSensorData, getStatus } = require('../controller/sensorCtrl');

const router = express.Router();

router.post('/receive', receiveData);
router.get('/data', getData);
// router.get('/sensor-data', getLatestSensorData);
router.get('/status', getStatus);
router.get('/latest', getLatestSensorData);

module.exports = router;
