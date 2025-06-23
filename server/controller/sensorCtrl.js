const { db } = require('../config/firebase');
const admin = require('firebase-admin');

// Handle receiving new sensor data
const receiveData = async (req, res) => {
  const data = {
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    smoke: req.body.smoke,
    fireDetected: req.body.fireDetected,
    timestamp: new Date().toISOString(),
  };

  // Store sensor data
  await db.collection('fire_readings').add(data);

  // If fire detected, notify all admins
  if (data.fireDetected) {
    const tokensSnapshot = await db.collection('admin_tokens').get();
    tokensSnapshot.forEach(async (doc) => {
      const token = doc.data().token;
      try {
        await admin.messaging().send({
          notification: {
            title: '🔥 Fire Alert',
            body: `Temp: ${data.temperature}°C, Smoke: ${data.smoke}`,
          },
          token,
        });
      } catch (err) {
        console.error("Notification error:", err.message);
      }
    });
  }

  res.json({ success: true, message: 'Data received' });
};

// Return last 100 entries
const getData = async (req, res) => {
  try {
    const snapshot = await db
      .collection('fire_readings')
      .orderBy('timestamp', 'desc')
      .limit(100)
      .get();

    const data = snapshot.docs.map((doc) => doc.data());

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ✅ Get latest single sensor data (for dashboard)
const getLatestSensorData = async (req, res) => {
  try {
    const snapshot = await db
      .collection('fire_readings')
      .orderBy('timestamp', 'desc')
      .limit(1)
      .get();

    if (snapshot.empty) {
      return res.status(200).json({
        temperature: null,
        humidity: null,
        gas: null,
        fireDetected: null,
      });
    }

    const doc = snapshot.docs[0].data();

    res.status(200).json({
      temperature: doc.temperature,
      humidity: doc.humidity,
      gas: doc.smoke,
      fireDetected: doc.fireDetected,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get fire status string
const getStatus = async (req, res) => {
  try {
    const snapshot = await db
      .collection('fire_readings')
      .orderBy('timestamp', 'desc')
      .limit(1)
      .get();

    const doc = snapshot.docs[0]?.data();

    const status = doc?.fireDetected ? "🔥 Fire Detected!" : "✅ Normal";

    res.status(200).json({ status });
  } catch (error) {
    res.status(500).json({ status: "❌ Status unavailable" });
  }
};

module.exports = {
  receiveData,
  getData,
  getLatestSensorData,
  getStatus,
};
