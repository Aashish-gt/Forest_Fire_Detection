const { db, messaging, admin } = require('../config/firebase');
const transporter = require('../services/mailer') // Ensure you have a mailer service set up

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
    console.log("Fire detected - sending notifications...");

    const tokensSnapshot = await db.collection('admin_tokens').get();

    tokensSnapshot.forEach(async doc => {
      const { token, email } = doc.data();

      // Send FCM notification (if token exists)
      // if (token) {
      //   await admin.messaging().send({
      //     notification: {
      //       title: '🔥 Fire Alert',
      //       body: `Temp: ${data.temperature}°C, Smoke: ${data.smoke}`
      //     },
      //     token
      //   });
      // }

      // Send Email notification
      if (email) {
        console.log(`Attempting to send email to: ${email}`);
        const mailOptions = {
          from: 'officer',
          to: email,
          subject: '🔥 Fire Detected!',
          html: `
            <h3>Fire Alert!</h3>
            <p><strong>Temperature:</strong> ${data.temperature}°C</p>
            <p><strong>Humidity:</strong> ${data.humidity}%</p>
            <p><strong>Smoke Level:</strong> ${data.smoke}</p>
            <p><strong>Time:</strong> ${data.timestamp}</p>
          `
        };

        try {
          await transporter.sendMail(mailOptions);
          console.log(`Email sent to ${email}`);
        } catch (err) {
          console.error(`Failed to send email to ${email}:`, err.message);
        }
      }
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
