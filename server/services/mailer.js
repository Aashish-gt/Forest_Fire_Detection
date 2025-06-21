const { db } = require('../config/firebase')

const checkFire = async (req, res) => {
  try {
    const data = req.body;
    data.timestamp = new Date().toISOString();

    await db.collection('fire_readings').add(data);

    // Emit real-time update
    global.io.emit('new_data', data);

    // Send notification if fire is detected
    if (data.fireDetected) {
      console.log('🔥 Fire detected!');
      // integrate FCM or email here
    }

    res.status(200).json({ success: true, message: 'Data received.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {checkFire}