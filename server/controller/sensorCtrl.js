const { db, messaging, admin } = require('../config/firebase');

const receiveData = async (req, res) => {
  const data = {
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    smoke: req.body.smoke,
    fireDetected: req.body.fireDetected,
    timestamp: new Date().toISOString()
  };

  await db.collection('fire_readings').add(data);

  if (data.fireDetected) {
    const tokens = await db.collection('admin_tokens').get();
    tokens.forEach(async doc => {
      const token = doc.data().token;
      await require('firebase-admin').messaging().send({
        notification: { title: '🔥 Fire Alert', body: `Temp: ${data.temperature}°C, Smoke: ${data.smoke}` },
        token
      });
    });
  }

  res.json({ success: true, message: 'Data received' });
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
