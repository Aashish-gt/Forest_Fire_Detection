// /controllers/dataController.js
const { db } = require('../config/firebase');

const receiveData = async (req, res) => {
    try {
        const data = req.body;
        data.timestamp = new Date().toISOString();

        await db.collection('fire_readings').add(data);

        res.status(200).json({
            success: true,
            message: 'Data received.'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

const getData = async (req, res) => {
    try {
        const snapshot = await db.collection('fire_readings')
            .orderBy('timestamp', 'desc')
            .limit(100)
            .get();

        const data = snapshot.docs.map(doc => doc.data());
        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = { receiveData, getData }
